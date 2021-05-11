import { hash } from 'bcrypt';
import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../shared/errors/AppError';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUsersRepository } from '../../repositories/IUserRepository';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({ name, password, email, driver_license }: ICreateUserDTO): Promise<void> {
    const userExists = await this.usersRepository.findByEmail(email);

    if (userExists) {
      throw new AppError('User already exists!', 400);
    }

    const passwordHash = await hash(password, 8);

    await this.usersRepository.create({
      name,
      password: passwordHash,
      email,
      driver_license
    });
  }
}

export { CreateUserUseCase };

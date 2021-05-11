import { IUsersRepository } from '../../repositories/IUserRepository';
import { CreateUserUseCase } from '../createUser/CreateUserUseCase';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

let authenticateUserUseCase: AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe('Authenticate User', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    authenticateUserUseCase = new AuthenticateUserUseCase(usersRepositoryInMemory);
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });

  it('1) Should be able to authenticate an user', async () => {
    const user: ICreateUserDTO = {
      name: 'User test',
      email: 'user@test.com',
      password: '1234',
      driver_license: '789456'
    };

    await createUserUseCase.execute(user);
    const result = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password
    });

    expect(result).toHaveProperty('token');
  });

  it('2) Should not be able to authenticate when user does not exists', async () => {
    try {
      const result = await authenticateUserUseCase.execute({
        email: 'inexistentuser@email.com',
        password: '123'
      });

      expect(result).toBeUndefined();
    } catch (error) {
      expect(error).toBeInstanceOf(AppError);
      expect(error.message).toBe('Email or password incorrect!');
      expect(error.statusCode).toBe(404);
    }
  });

  it('3) Should not be able to authenticate when user password does not match', async () => {
    try {
      const user: ICreateUserDTO = {
        name: 'User test',
        email: 'user@test.com',
        password: '1234',
        driver_license: '789456'
      };

      await createUserUseCase.execute(user);
      const result = await authenticateUserUseCase.execute({
        email: user.email,
        password: 'wrongPassword'
      });

      expect(result).toBeUndefined();
    } catch (error) {
      expect(error).toBeInstanceOf(AppError);
      expect(error.message).toBe('Email or password incorrect!');
      expect(error.statusCode).toBe(404);
    }
  });
});

import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import { UsersRepository } from '../modules/accounts/repositories/implementations/UserRepository';
import { AppError } from '../shared/errors/AppError';

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction): Promise<void> {
  const authHeader = request.headers.authorization;
  if (!authHeader) throw new AppError('Token missing', 400);

  const [, token] = authHeader.split(' ');

  try {
    const { sub: user_id } = verify(token, '44f7e546e7154e04d7e9f13574be041c') as IPayload;
    const usersRespository = new UsersRepository();

    const user = await usersRespository.findById(user_id);

    if (!user) throw new AppError('User does not exists!', 400);

    request.user = {
      id: user_id
    };

    next();
  } catch {
    throw new AppError('Token missing', 400);
  }
}

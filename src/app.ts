import express, { NextFunction, Response, Request } from 'express';
import 'express-async-errors';
import swaggerUI from 'swagger-ui-express';

import 'reflect-metadata';
import './database';
import './shared/container';

import { routes } from './routes';
import { AppError } from './shared/errors/AppError';
import swaggerFile from './swagger.json';

const app = express();

app.use(express.json());
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));
app.use(routes);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError)
    return response.status(err.statusCode).json({
      message: err.message
    });

  next();

  return response.status(500).json({
    status: 'error',
    message: `Internal server error - ${err.message}`
  });
});

export { app };

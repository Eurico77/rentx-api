import { Router } from 'express';
import { categoriesRouter } from './categories/categories.routes';

const routes = Router()
routes.use('/categories', categoriesRouter);


export { routes }

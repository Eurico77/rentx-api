import { Router } from 'express';

import { createCategoryController } from '../modules/cars/useCases/createCategory/factory/CreateCategory';

const categoriesRoutes = Router();

categoriesRoutes.post('/', (request, response) => {
  return createCategoryController.handler(request, response);
});

export { categoriesRoutes };

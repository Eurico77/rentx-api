import { Router } from 'express';

import { createCategoryController } from '../modules/cars/useCases/createCategory/factory/CreateCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategory/factory/ListCategory';

const categoriesRoutes = Router();

categoriesRoutes.post('/', (request, response) => {
  return createCategoryController.handler(request, response);
});

categoriesRoutes.get('/', (request, response) => {
  return listCategoriesController.handler(request, response);
});

export { categoriesRoutes };

import { Router } from 'express';
import multer from 'multer';

import { createCategoryController } from '../modules/cars/useCases/createCategory/factory/CreateCategory';
import { importCategoryController } from '../modules/cars/useCases/importCategory/factory/CreateImportCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategory/factory/ListCategory';

const categoriesRoutes = Router();

const upload = multer({
  dest: './tmp',
});

categoriesRoutes.post('/', (request, response) => {
  return createCategoryController.handler(request, response);
});

categoriesRoutes.get('/', (request, response) => {
  return listCategoriesController.handler(request, response);
});

categoriesRoutes.post('/import', upload.single('file'), (request, response) => {
  return importCategoryController.handler(request, response);
});

export { categoriesRoutes };

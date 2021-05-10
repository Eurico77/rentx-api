import { Router } from 'express';
import multer from 'multer';

import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController';
import { importCategoryController } from '../modules/cars/useCases/importCategory/factory/CreateImportCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategory/factory/ListCategory';

const categoriesRoutes = Router();

const upload = multer({
  dest: './tmp',
});

const createCategoryController = new CreateCategoryController();

categoriesRoutes.post('/', createCategoryController.handler);

categoriesRoutes.get('/', (request, response) => {
  return listCategoriesController.handler(request, response);
});

categoriesRoutes.post('/import', upload.single('file'), (request, response) => {
  return importCategoryController.handler(request, response);
});

export { categoriesRoutes };

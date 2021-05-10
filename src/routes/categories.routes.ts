import { Router } from 'express';
import multer from 'multer';

import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController';
import { ImportCategoryController } from '../modules/cars/useCases/importCategory/ImportCategoryController';
import { ListCategoryController } from '../modules/cars/useCases/listCategories/ListCategoryController';

const categoriesRoutes = Router();

const upload = multer({
  dest: './tmp',
});

const createCategoryController = new CreateCategoryController();
const importCategoryUseCase = new ImportCategoryController();
const listCategoriesController = new ListCategoryController();

categoriesRoutes.post('/', createCategoryController.handler);

categoriesRoutes.get('/', listCategoriesController.handler);

categoriesRoutes.post(
  '/import',
  upload.single('file'),
  importCategoryUseCase.handler
);

export { categoriesRoutes };

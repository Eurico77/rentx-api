import { CategoriesRepository } from '../../../repositories/CategoriesRepository';
import { ListCategoryController } from '../ListCategoryController';
import { ListCategoryUseCase } from '../ListCategoryUseCase';

const categoriesRepository = new CategoriesRepository();
const listCategoryUseCase = new ListCategoryUseCase(categoriesRepository);
const listCategoriesController = new ListCategoryController(
  listCategoryUseCase
);

export { listCategoriesController };

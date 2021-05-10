import { Category } from '../../entities/Category';
import { ICategoryRepository } from '../../repositories/implementations/ICategoriesRepository';

class ListCategoryUseCase {
  constructor(private categoriesRepository: ICategoryRepository) {}

  execute(): Category[] {
    const categories = this.categoriesRepository.list();

    return categories;
  }
}
export { ListCategoryUseCase };

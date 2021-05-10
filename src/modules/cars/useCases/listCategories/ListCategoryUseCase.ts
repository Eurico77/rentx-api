import { inject, injectable } from 'tsyringe';

import { Category } from '../../entities/Category';
import { ICategoryRepository } from '../../repositories/implementations/ICategoriesRepository';

@injectable()
class ListCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoryRepository
  ) {}

  async execute(): Promise<Category[]> {
    const categories = await this.categoriesRepository.list();

    return categories;
  }
}
export { ListCategoryUseCase };
import { CategoriesRepository } from "../repositories/CategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}
class CreateCategoryService {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute({ name, description }: IRequest): void {
    const existsCategory = this.categoriesRepository.findByName(name);
    if (existsCategory) {
      throw new Error("Error");
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryService };

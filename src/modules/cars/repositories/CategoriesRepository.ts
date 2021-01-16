import { Category } from '../models/Category';
import {
  ICategoryRepository,
  ICreateCategoryDTO,
} from './ICategoriesRepository';

class CategoriesRepository implements ICategoryRepository {
  private categories: Category[];

  private static createInstance: CategoriesRepository;

  private constructor() {
    this.categories = [];
  }

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.createInstance) {
      CategoriesRepository.createInstance = new CategoriesRepository();
    }
    return CategoriesRepository.createInstance;
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });
    this.categories.push(category);
  }

  list(): Array<Category> {
    return this.categories;
  }
  findByName(name: string): Category {
    const category = this.categories.find((category) => category.name === name);
    return category;
  }
}

export { CategoriesRepository };

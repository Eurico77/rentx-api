import { Category } from "../../models/categories/Category";
import { ICreateCategoryDTO, ICategoryRepository } from "./ICategoriesRepository";


class TestCategoryRepository implements ICategoryRepository {
    findByName(name: string): Category {
        console.log(name);
        return null
    }
    index(): Category[] {
        return null
    }
    create({ name, description }: ICreateCategoryDTO): void {
        console.log(name, description);
    }
}

export { TestCategoryRepository }
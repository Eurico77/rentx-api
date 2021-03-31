import { Category } from '../../models/categories/Category'
import { ICategoryRepository, ICreateCategoryDTO } from './ICategoriesRepository';

class CategoriesRepository implements ICategoryRepository {
    private categories: Category[];
    
    constructor() {
        this.categories = []
    }
    create({ name, description }: ICreateCategoryDTO): void {
        const category = new Category();

        Object.assign(category, {
            name,
            description,
            created_at: new Date()
        })
        this.categories.push(category)
    }

    index(): Array<Category> {
        return this.categories
    }
    findByName(name): Category {
        const category = this.categories.find(category => category.name === name)
        return category;
    }
}

export { CategoriesRepository }
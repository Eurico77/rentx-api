import { CategoriesRepository } from '../../repositories/categories/CategoriesRepository'

interface Irequest {
    name: string;
    description: string;
}
class CreateCategoryService {
    constructor(private categoriesRepository: CategoriesRepository) { }

    execute({ name, description }: Irequest): void {
        const existsCategory = this.categoriesRepository.findByName(name)
        if (existsCategory) {
            throw new Error('Error')
        }

        this.categoriesRepository.create({ name, description })

    }

}

export { CreateCategoryService }
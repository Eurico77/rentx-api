import { Router } from 'express';
import { CategoriesRepository } from '../../repositories/categories/CategoriesRepository';

const categoriesRouter = Router();
const categoriesRepository = new CategoriesRepository()


categoriesRouter.post('/', (request, response) => {
    const { name, description } = request.body;

    categoriesRepository.create({ name, description })
    return response.status(201).send()
})


export { categoriesRouter }

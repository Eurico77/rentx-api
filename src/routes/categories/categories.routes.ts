import { Router } from 'express';

import { Category } from '../../models/categories/Category';

const categoriesRouter = Router();

const categories: Category[] = []

categoriesRouter.post('/', (request, response) => {
	const { name, description } = request.body;
	const category = new Category();

	Object.assign(category, {
		name,
		description,
		created_at: new Date()
	})
	
	categories.push(category)

	return response.status(201).json({ category })


})


export { categoriesRouter }

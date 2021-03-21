import { Request, Response } from 'express';

import { ListCategoryUseCase } from './ListCategoryUseCase';

class ListCategoryController {
  constructor(private listCategoriesUseCase: ListCategoryUseCase) {}

  handler(request: Request, response: Response): Response {
    const categories = this.listCategoriesUseCase.execute();
    return response.json({ categories });
  }
}
export { ListCategoryController };

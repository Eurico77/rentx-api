import { Request, Response } from 'express';

import { ListCategoryUseCase } from './ListCategoryUseCase';

class ListCategoryController {
  constructor(private listCategoriesUseCase: ListCategoryUseCase) {}

  handler(request: Request, response: Response): Response {
    const all = this.listCategoriesUseCase.execute();
    return response.json(all);
  }
}
export { ListCategoryController };

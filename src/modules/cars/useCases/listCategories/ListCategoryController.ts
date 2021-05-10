import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListCategoryUseCase } from './ListCategoryUseCase';

class ListCategoryController {
  async handler(request: Request, response: Response): Promise<Response> {
    const listCategories = container.resolve(ListCategoryUseCase);

    const allCategories = await listCategories.execute();

    return response.json(allCategories);
  }
}
export { ListCategoryController };

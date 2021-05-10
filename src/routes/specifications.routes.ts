import { Router } from 'express';

import { CreateSpecificationController } from '../modules/cars/useCases/createSpecifications/CreateSpecificationController';

const specificationsRoutes = Router();

const createspecificationController = new CreateSpecificationController();
specificationsRoutes.post('/', createspecificationController.handler);

export { specificationsRoutes };

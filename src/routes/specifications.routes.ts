import { Router } from 'express';

import { createspecificationController } from '../modules/cars/useCases/createSpecifications/factory/CreateSpecification';

const specificationsRoutes = Router();

specificationsRoutes.post('/', (request, response) => {
  return createspecificationController.handler(request, response);
});

export { specificationsRoutes };

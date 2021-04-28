import { SpecificationsRepository } from '../../../repositories/SpecificationRepository';
import { CreateSpecificationController } from '../CreateSpecificationController';
import { CreateSpecificationUseCase } from '../CreateSpecificationUseCase';

const specificationsRepository = new SpecificationsRepository();
const createspecificationUseCase = new CreateSpecificationUseCase(
  specificationsRepository
);
const createspecificationController = new CreateSpecificationController(
  createspecificationUseCase
);

export { createspecificationController };

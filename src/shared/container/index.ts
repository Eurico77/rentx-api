import { container } from 'tsyringe';

import { CategoriesRepository } from '../../modules/cars/repositories/CategoriesRepository';
import { ICategoryRepository } from '../../modules/cars/repositories/implementations/ICategoriesRepository';
import { ISpecificationsRepository } from '../../modules/cars/repositories/implementations/ISpecificationsRepository';
import { SpecificationsRepository } from '../../modules/cars/repositories/SpecificationRepository';

container.registerSingleton<ICategoryRepository>(
  'CategoriesRepository',
  CategoriesRepository
);
container.registerSingleton<ISpecificationsRepository>(
  'SpecificationsRepository',
  SpecificationsRepository
);

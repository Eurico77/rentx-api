import { container } from 'tsyringe';

import { UsersRepository } from '../../modules/accounts/repositories/implementations/UserRepository';
import { IUsersRepository } from '../../modules/accounts/repositories/IUserRepository';
import { ICategoryRepository } from '../../modules/cars/repositories/ICategoriesRepository';
import { CategoriesRepository } from '../../modules/cars/repositories/implementations/CategoriesRepository';
import { SpecificationsRepository } from '../../modules/cars/repositories/implementations/SpecificationRepository';
import { ISpecificationsRepository } from '../../modules/cars/repositories/ISpecificationsRepository';

container.registerSingleton<ICategoryRepository>('CategoriesRepository', CategoriesRepository);
container.registerSingleton<ISpecificationsRepository>('SpecificationsRepository', SpecificationsRepository);
container.registerSingleton<IUsersRepository>('UsersRepository', UsersRepository);

import { Specification } from '../../entities/Specification';

interface ICreateSpecificationsDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ description, name }: ICreateSpecificationsDTO);
  findByName(name: string): Specification;
}

export { ISpecificationsRepository, ICreateSpecificationsDTO };

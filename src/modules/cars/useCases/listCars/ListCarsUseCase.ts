import { Car } from "../../infra/typeorm/entities/Car";
import { ICarsRepository } from "../../repositories/ICarsRepository";

interface IRequest {
  category_id?: string;
  brand?: string;
  name?: string;
}

class ListCarsUseCase {
  constructor(private carsRepository: ICarsRepository) {}

  async execute({ category_id, brand, name }: IRequest): Promise<Car[]> {
    const cars = await this.carsRepository.listAvailable(
      brand,
      category_id,
      name
    );

    return cars;
  }
}

export { ListCarsUseCase };

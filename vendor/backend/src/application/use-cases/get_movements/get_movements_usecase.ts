import { GetMovementsDTO } from './get_movements_dto';
import { IUseCase } from '@app/use-cases/UseCase';
import { IMovementRepository } from '@app/repositories/IMovementRepository';
import { Result } from '@core/logic/Result';

export class GetMovementsUseCase implements IUseCase {
  movementsRepository;

  constructor(movementsRepository: IMovementRepository) {
    this.movementsRepository = movementsRepository;
  }

  async execute(dto: GetMovementsDTO) {
    try {
      const movements = await this.movementsRepository.getAll();
      return Result.ok(movements);
    } catch (err) {
      // return left(new GenericAppError.UnexpectedError(err)) as Response;
    }
  }
}

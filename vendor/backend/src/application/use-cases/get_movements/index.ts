import { IMovementRepository } from '@app/repositories/IMovementRepository';

import { GetMovementsUseCase } from './get_movements_usecase';
export { GetMovementsController } from './get_movements_controller';

export { GetMovementsDTO } from './get_movements_dto';
export { GetMovementsErrors } from './get_movements_errors';

const momementsRepositoryPendingToImplement = null;

const getMovementsUseCase = new GetMovementsUseCase(momementsRepositoryPendingToImplement as IMovementRepository);

const getMovementsController = new GetMovementsController(getMovementsUseCase);

export { getMovementsController };

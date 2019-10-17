import { IUseCase } from '@app/use-cases/UseCase';
import { IController, Controller, IControllerResponse } from '@app/use-cases/Controller';

// import { CreateUserUseCase } from "./CreateUserUseCase";
// import { CreateUserDTO } from "./CreateUserDTO";
// import { CreateUserErrors } from "./CreateUserErrors";
// import { GetMovementsErrors } from './get_movements_errors';

import { Result } from '@core/logic/Result';

class GetMovementsController extends Controller<IUseCase> {
    constructor(useCase: IUseCase) {
        super(useCase);
    }

    async call() {
        try {
            /*
            const result = await this.useCase.execute() as;

            if (result.lenght === 0) {
              return Result.fail<IControllerResponse>({
                clientMessage: new GetMovementsErrors.NoMovementsFound().errorValue()
              });
            }
            */
            return Result.ok<IControllerResponse>();
        } catch (err) {
            console.error(err);
        }
    }
}

export { GetMovementsController };

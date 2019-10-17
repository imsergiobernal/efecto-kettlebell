import { Result } from "@core/logic/Result";
import { UseCaseError } from "@core/logic/UseCaseError";

export namespace GetMovementsErrors {

  export class NoMovementsFound extends Result<UseCaseError> {
    constructor (id?: number) {
      super(false, {
        message: `No movements where found`
      } as UseCaseError)
    }
  }

}

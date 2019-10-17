import { Result } from '@core/logic/Result';
import { IControllerResponse } from './ControllerResponses';

export interface IController<T> {
    useCase: T;

    call(): Promise<Result<IControllerResponse> | Result<void>>;
}

/**
 * El controlador es un artefacto que permite hacer frontera con la infrastructura.
 * Su objetivo es orquestar un único caso de uso.
 * Se encargará de asegurar que recibe todo lo que el caso de uso necesita y creará un resultado
 * de controlador acorde al resultado de caso de uso.
 * @example ```
 * UseCase: Result<UseCase> (use case result/errors like not found, min quantity...)
 * Controller: Result<Controller> (adapts the result/error to an infrastructure unified interface)
 * Handler: Handles the request and implements the controller result into a specific response
 * ```
 */
export abstract class Controller<T> implements IController<T> {
    useCase: T;

    constructor(useCase: T) {
        this.useCase = useCase;
    }

    abstract call(): Promise<Result<IControllerResponse> | Result<void>>;
}

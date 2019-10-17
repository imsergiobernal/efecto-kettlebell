/**
 * Class free attempt, pseudoclasical
 */

function createMovementUseCase<R>(repository: R) {
    this.repository = repository;
}

createMovementUseCase.prototype.execute = async function (opts: any) {
    const { id } = opts;
    const movements = this.repository.createMovement({ id });
}

export { createMovementUseCase };

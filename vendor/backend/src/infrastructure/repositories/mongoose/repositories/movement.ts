import { IMovementRepository } from '@app/repositories/IMovementRepository';

function movementRepository(model) {
    return {
        model,
        getAll: async function() {
            return this.model.find();
        },
        getByUUID: async function(uuid) {
            return this.model.findOne({ uuid });
        },
        prototype: movementRepository
    }
}

function makeMovementRepository(model): IMovementRepository {
    return movementRepository(model);
}

module.exports.MovementRepository = makeMovementRepository;

/**
 * Models
 */
const { movement } = require('../models/movement');


/**
 * Repositories
 */
const MovementRepository = require('./Movement');

export = {
    movementRepository: new MovementRepository(movement)
}
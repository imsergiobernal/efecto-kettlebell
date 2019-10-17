const mongoose = require('mongoose');

const { movementSchema } = require('./schemas/movement');
const model = mongoose.model(movementSchema);

export { model as movement };
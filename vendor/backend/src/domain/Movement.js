/**
 * Movement aggregate
 */
function Movement(props, id) {
}

Movement.prototype.create = function(props, id) {
    const movement = new Movement(props, id);
    return movement;
}

exports.Movement = Movement.prototype.create;

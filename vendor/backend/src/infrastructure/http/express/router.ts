const express = require('express');

/**
 * La idea es que esta función tan sólo construya el objeto Router.
 * En application habría que crear una lógica que matchee petición y módulo.
 * 
 * Ahora se está atacando directamente al caso de uso de cada módulo.
 * Habrá que atacar al módulo desde application.
 */
const { getMovementUseCase } = require('../../modules/guide/application');

module.exports.makeRouter = function() {
    const router = express.Router();

    router.get('/api/guide', getMovementUseCase);

    return router; 
}
import express from 'express';

import { getMovementsController } from '@app/use-cases/get_movements';

const app: express.Application  = express();
const router: express.Router    = express.Router();

router.get('/guide/movements', getMovementsController);

app.use('/api', router);

export { app as webserver }; 
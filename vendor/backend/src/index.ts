import 'module-alias/register';
import { backendApplication } from '@infra/index';

(async () => {
    await backendApplication().start();
})();

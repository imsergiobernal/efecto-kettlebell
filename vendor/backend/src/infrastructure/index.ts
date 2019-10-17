import { applicationMongoose } from './repositories/mongoose';
import { webserver } from './http/express';

async function connectToDatabase(uris, opts) {
    try {
        await applicationMongoose(uris, opts);
    } catch (err) {
        throw err;
    }
}

async function startHTTPService(port) {
    return webserver.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
}

export function backendApplication() {
    return {
        start: async function() {
            try {
                await connectToDatabase('mongodb://localhost:27017/myapp', { useNewUrlParser: true });
                await startHTTPService(3000);
            } catch (err) {
                console.error('Couldnt start the backend application', err);
                process.exit(1);
            }
        }
    }
}

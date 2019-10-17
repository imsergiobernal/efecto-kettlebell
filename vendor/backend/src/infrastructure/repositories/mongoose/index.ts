const mongoose = require('mongoose');

export function applicationMongoose(uris, opts) {
    return mongoose.connect(uris, opts);
}


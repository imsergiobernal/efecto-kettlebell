const { Schema } = require('mongoose');

module.exports.movementSchema = new Schema(
    {
        uuid: String,
        title: String,
        previous: Array,
        next: Array,
        category: Array,
        videos: [String],
        description: { attachments: [], body: String }
    }
);
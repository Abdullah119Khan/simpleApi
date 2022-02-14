const mongoose = require('mongoose'); //

const postSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    fatherName: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('post', postSchema);

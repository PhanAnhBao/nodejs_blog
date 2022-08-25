const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, maxLength: 255 },
    thumbnail: { type: String, maxLength: 600 },
    createAt: {type: Date, default: Date.now},
    updateAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Course', Course, 'courses');
const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;
mongoose.plugin(slug);


const Course = new Schema({
    name: { type: String, required: true },
    thumbnail: { type: String, required: true },
    slug: {type: String, slug: 'name', unique: true},
    videoId: {type: String, required: true},
}, {
    timestamps: true,
});

module.exports = mongoose.model('Course', Course, 'courses'); 
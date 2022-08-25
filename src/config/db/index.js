const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_course_dev');
        console.log("Connect Successfully !!!!!");
    }
    catch(e){
        console.log("Connect fails !!!");
    }
}

module.exports = {connect};
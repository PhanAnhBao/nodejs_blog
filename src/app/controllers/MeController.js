const Course =  require('../models/Course');
const {mutipleMongooseToObject} = require('../../util/mongoose');
class MeController {

    // [GET] /me/stored/courses
    storedCourses(red, res, next) {

        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
            .then(([course, deletedCount]) =>  
                res.render('me/stored-courses', {
                    deletedCount,
                    course: mutipleMongooseToObject(course)
                }))
            .catch(next);
    }

    // [GET] /me/trash/courses
    trashCourses(red, res, next) {
        Course.findDeleted({})
            .then(course => res.render('me/trash-courses', {
                course: mutipleMongooseToObject(course)
            }))
            .catch(next);
    }
}

module.exports = new MeController;
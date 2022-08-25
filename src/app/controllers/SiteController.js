const Course =  require('../models/Course');

class SiteController {

    // [GET] /home
    home(req, res) {
        Course.find({}, function(err, courses) {
            if (!err){
                res.json(courses);
            }
            else {
                res.status(400).json({err: "ERROR!!!"});
            }
            
        });
    }

    // [GET] /search
    search(req, res) {
        res.render("search");
    }
}

module.exports = new SiteController;
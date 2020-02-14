const db = require("../models/trips");

module.exports = {
    get: function(data, cb) {
        db.find({
            _userId: data._id
        }, cb);
    },
    save: function(data, cb){
        var newTrip = {
            _usereId: data._id,
            title: data.title,
            start: data.start,
            end: data.end,
            description: data.description,

        };

        db.create(newTrip, function(err, doc){
            if(err){
                console.log(err)
            }else {
                console.log(doc);
                cb(doc);
            }
        })
    },
    delete: function(data, cb){
        Trip.remove({
            _id: data._id
        }, cb);
    }

}; 
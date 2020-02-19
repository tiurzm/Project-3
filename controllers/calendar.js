const dbTrips = require("../models/trips");
const dbUsers = require("../models/user")

module.exports = {
    get: function(req, res) {
        console.log(req.id)
        dbUsers.find({
            _id: req.id
        })
        .populate({
           path: "trip", populate: {path: "trip"}
        })
        .then(function(dbTrips) {
            console.log("trips", dbTrips)
            res(dbTrips);
        })
        .catch(function(err) {
            return err;
        });
    },
    add: function(req, res){
        console.log(req)
        var newTrip = {
            title: req.title,
            start: req.start,
            end: req.end,
            description: req.description,
            user: req.id

        };

        dbTrips.create(newTrip) 
            .then(function(dbTrips) {
               return dbUsers.findOneAndUpdate(
                    {_id: req.id}, 
                    { $push: { trip: dbTrips._id } }, 
                    { new: true })
                .then(function(dbTrips){
                    res.json(dbTrips)
                })
            })
            .catch(function(err) {
                return err;
            });
    },
    // delete: function(data, cb){
    //     dbTrips.remove({
    //         _id: data._id
    //     }, cb);
    // }

}; 
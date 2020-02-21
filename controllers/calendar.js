const dbTrips = require("../models/trips");
const dbUsers = require("../models/user")

module.exports = {
    get: function(req, res) {
        console.log(req.session.passport.user)
        dbUsers.find({
            _id: req.session.passport.user
        })
        .populate({
           path: "trip", populate: {path: "trip"}
        })
        .then(function(dbTrips) {
            console.log("trips", dbTrips)
            res.send(dbTrips);
        })
        .catch(function(err) {
            return err;
        });
    },
    add: function(req, res){
        var newTrip = {
            title: req.body.title,
            start: req.body.start,
            end: req.body.end,
            description: req.body.description,
            user: req.cookies.user_id

        };

        dbTrips.create(newTrip) 
            .then(function(trip) {
                console.log(trip)
               return dbUsers.findOneAndUpdate(
                    {_id: req.cookies.user_id}, 
                    { $push: { trip: trip.id } }, 
                    { new: true })
                .then(function(user){
                    res.json(user)
                })
            })
            .catch(function(err) {
                console.log(err)
                res.status(500).json(err)
            });
    },
    // delete: function(data, cb){
    //     dbTrips.remove({
    //         _id: data._id
    //     }, cb);
    // }

}; 
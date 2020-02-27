const dbTrips = require("../models/trips");
const dbUsers = require("../models/user")

module.exports = {
    get: function(req, res) {
        dbUsers.find({
            _id: req.session.passport.user
        })
        .populate({
           path: "trip", populate: {path: "trip"}
        })
        .then(function(dbTrips) {
            // console.log("trips", dbTrips)
            res.send(dbTrips);
        })
        .catch(function(err) {
            return err;
        });
    },
    add: function(req, res){
        var newTrip = {
            title: req.body.title,
            location: req.body.location,
            start: req.body.start,
            end: req.body.end,
            description: req.body.description,
            user: req.session.passport.user,
            guests: [req.body.guests]

        };

        dbTrips.create(newTrip) 
            .then(function(trip) {
                console.log(trip)
               return dbUsers.findOneAndUpdate(
                    {_id: req.session.passport.user}, 
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
    delete: function(req, res) {
        console.log(req.params.id)
        dbTrips.findByIdAndDelete(req.params.id)
            .then(function(dbTrips) {
                console.log("deleted trip", dbTrips)
                res.send(dbTrips);
            })
            .catch(function(err) {
                return err;
            });
      },
    getTrip: function(req, res){
        dbTrips.findById(req.params.id)
        .then(function(dbTrips) {
            console.log("trips", dbTrips)
            res.send(dbTrips);
        })
        .catch(function(err) {
            return err;
        });
    },
    update: function (req, res){
        var updatedTrip = {
            title: req.body.title,
            location: req.body.location,
            start: req.body.start,
            end: req.body.end,
            description: req.body.description,
            user: req.session.passport.user

        };
        dbTrips.findByIdAndUpdate(req.params.id, updatedTrip)
        .then(function(dbTrips) {
            console.log("trips", dbTrips)
            res.send(dbTrips);
        })
        .catch(function(err) {
            return err;
        });
    }

}; 
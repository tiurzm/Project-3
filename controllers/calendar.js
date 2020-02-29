const moment = require("moment-timezone");
const dbTrips = require("../models/trips");
const dbUsers = require("../models/user")

const assignUsersToTrip = (user, guests, tripId) => {
    let userIds = [user, ...guests];
    return dbUsers.updateMany(
        {}, 
        { $pull: { trip: tripId} })
        .then(() => {
        return dbUsers.updateMany(
            {_id: { $in : userIds } }, 
            { $push: { trip: tripId} }, 
            { new: true });
    })
}

module.exports = {
    get: function(req, res) {
        dbUsers.find({
            _id: req.session.passport.user
        })
        .populate({
           path: "trip", populate: {path: "trip"}
        })
        .then(function(dbTrips) {
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
            start: moment(req.body.start),
            end: moment(req.body.end),
            description: req.body.description,
            user: req.session.passport.user,
            guests: req.body.guests
        };
        dbTrips.create(newTrip) 
            .then(function(trip) {
                
                assignUsersToTrip(req.session.passport.user,req.body.guests, trip.id)
                .then(users => res.json(trip));
            })
            .catch(function(err) {
                console.log(err)
                res.status(500).json(err)
            });
    },
    delete: function(req, res) {
        // console.log(req.params.id)
        dbTrips.findByIdAndDelete(req.params.id)
            .then(function(dbTrips) {
                res.send(dbTrips);
            })
            .catch(function(err) {
                return err;
            });
      },
    getTrip: function(req, res){
        dbTrips.findById(req.params.id)
        .then(function(dbTrips) {
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
            start: moment(req.body.start),
            end: moment(req.body.end),
            description: req.body.description,
            user: req.session.passport.user,
            guests: req.body.guests
        };
        dbTrips.findByIdAndUpdate(req.params.id, updatedTrip)
        .then(function(dbTrips) {
            assignUsersToTrip(req.session.passport.user,req.body.guests, req.params.id)
            .then(users => {
                res.json(dbTrips);
            });
        })
        .catch(function(err) {
            return err;
        });    
    }

}; 
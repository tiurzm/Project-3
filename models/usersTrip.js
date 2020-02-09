const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserTripsSchema = new Schema({
    userId: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    tripId: [
        {
            type: Schema.Types.ObjectId,
            ref: "Trip"
        }
    ]
    
});

const UserTrips = mongoose.model("UserTrips", UserTripsSchema);

module.exports = UserTrips;

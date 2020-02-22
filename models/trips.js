const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment-timezone');

const dateDenver = moment.tz(Date.now(), "America/Denver")
console.log(dateDenver)

const TripSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true,
        validate: [
            function(input) {
              return input.length >= 1;
            },
            "Title should be longer."
          ]
    },
    start: {
      type: Date,
      default: dateDenver
    },
    end:{
      type: Date,
      default: dateDenver
    }, 
    description: String,
    created: {
      type: Date,
      default: dateDenver
    },
    lastUpdate: {
      type: Date,
      default: dateDenver
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    guests: [{
      type: Schema.Types.ObjectId,
      ref: "User"
    }],
    allDay: {
      type: Boolean,
      default: true
    }
});

// Custom method `lastUpdatedDate`
TripSchema.methods.lastUpdatedDate = function() {
  // Set the current user's `lastUpdated` property to the current date/time
  this.lastUpdated = Date.now();
  // Return this new date
  return this.lastUpdated;
};
TripSchema.methods.timeZone = function(){
  this.start = Date+dateDenver
  return this.start
}

const Trip = mongoose.model("Trip", TripSchema);

module.exports = Trip;


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    location: {
      type: String,
      trim: true,
    },
    start: Date,
    end: Date,
    description: String,
    created: {
      type: Date,
      default: Date.now
    },
    lastUpdate:Date,
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

const Trip = mongoose.model("Trip", TripSchema);

module.exports = Trip;


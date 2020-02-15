const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventsSchema = new Schema({
    tripId: [
        {
            type: Schema.Types.ObjectId,
            ref: "Trip"
        }
    ],
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
        required: true
    },
    end: Date, 
    description: String,
    created: {
        type: Date,
        default: Date.now
      },
    lastUpdated: Date
    
});

// Custom method `lastUpdatedDate`
EventsSchema.methods.lastUpdatedDate = function() {
    // Set the current user's `lastUpdated` property to the current date/time
    this.lastUpdated = Date.now();
    // Return this new date
    return this.lastUpdated;
  };
const Events = mongoose.model("Events", EventsSchema);

module.exports = Events;

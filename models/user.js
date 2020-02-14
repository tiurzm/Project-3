var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: "Username is required.",
    unique: true
  },
  password: {
    type: String,
    trim: true,
    required: "Password is required.",
    validate: [
      function (input) {
        return input.length >= 6;
      },
      "Password should be at least 6 characters long."
    ]
  },
  userCreated: {
    type: Date,
    default: Date.now
  },
  trip: {
    type: Schema.Types.ObjectId,
    ref: "MyTrips"
}
});

var User = mongoose.model("User", UserSchema);

module.exports = User;

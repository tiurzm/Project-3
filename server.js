// Dependencies
// ==================================================
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const flash = require('express-flash-messages');
const session = require("express-session");
const mongoose = require("mongoose");
const passport = require('passport');
const app = express();
const PORT = process.env.PORT || 3001;


// Middleware
// ==================================================

// Configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} else {
  app.use(express.static("client/public"));
}

// Connect to Mongoose
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/your-database-name-here", { useNewUrlParser: true });

// Cookie parser
app.use(cookieParser());
app.use(flash());
require('./config/passport')(passport);

// Express session
app.use(session({
  // Use dotenv dependency to hide secret
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 2592000000,
    httpOnly: false
  }
}));

// Initialize passport authentication 
app.use(passport.initialize());

// Persistent login sessions. Session expires after 6 months or when deleted by user.
app.use(passport.session());

// enable CORS so that browsers don't block requests.
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://localhost:3001'); // eventually change to heroku url - may need to be localhost:3000
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/groupaway', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});



// Routes
// ==================================================

const routes = require("./routes");
app.use(routes);


// Start API server
// ==================================================

app.listen(PORT, function () {
  console.log(`API Server now listening on PORT ${PORT}!`);
});
// Dependencies
// ==================================================
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const flash = require('express-flash-messages');
const session = require("express-session");
const mongoose = require("mongoose");
const passport = require('passport');

// Next 2 needed for Chatkit:
const cors = require('cors')
const Chatkit = require('@pusher/chatkit-server')

const app = express();

const PORT = process.env.PORT || 3001;

// Chatkit credentials
const chatkit = new Chatkit.default({
  instanceLocator: 'v1:us1:d4c14810-ec52-4731-a04b-a6a95a8e9e6c',
  key: 'b28d4a01-721e-4566-bab6-a4b61ba6bd0f:IRnfX/i/xgU98LFd5ooJIJK2+wn418YLvTnk07cZYbk=',
})

// Middleware
// ==================================================

// Configure body parser (May need to be changed from true to false per Chatkit tutorial)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} else {
  app.use(express.static("client/public"));
}

// Connect to Mongoose
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/groupaway", { 
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

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
});

// Chatkit post users and authenticate code goes from here >>>>>>>>>

app.post('/users', (req, res) => {
  const { username } = req.body
  chatkit
    .createUser({
      id: username,
      name: username
    })
    .then(() => res.sendStatus(201))
    .catch(error => {
      if (error.error === 'services/chatkit/user_already_exists') {
        res.sendStatus(200)
      } else {
        res.status(error.status).json(error)
      }
    })
})

app.post('/authenticate', (req, res) => {
  const authData = chatkit.authenticate({ userId: req.query.user_id })
  res.status(authData.status).send(authData.body)
})
// <<<<<<<<to here

// Routes
// ==================================================

const routes = require("./routes");
app.use(routes);


// Start API server
// ==================================================

app.listen(PORT, function () {
  console.log(`API Server now listening on PORT ${PORT}!`);
});
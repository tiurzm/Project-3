const User = require("../models/user");

const login = async (req, res) => {
  // router.get('/login', function(req, res) {
  //   res.render('login', {user: req.user, message: req.flash('error')});
  // });

  res.json(req.user);
};

const register = async (req, res) => {
  User.register(
    new User({ username: req.body.username, firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email}),
    req.body.password,
    err => {
      if (err) console.error(err);
      console.log(req.body.username);
      console.log("user registered!");

      res.redirect("/");
    }
  );
};

module.exports = { login, register };

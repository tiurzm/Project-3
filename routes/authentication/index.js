const express = require("express");
const router = express.Router();
const passport = require("passport");
const db = require("../../models");


// Route to check if user is signed in (using session)
// =========================================================

router.get("/user", (req, res) => {

   if (req.isAuthenticated()) {
      const currentUser = req.session.passport.user;
      console.log("Current user: ", currentUser);
      db.User.findOne({ _id: currentUser })
         .then(dbUser => {
            const user = {
               loggedIn: true,
               username: dbUser.username
            }
            console.log("Logged in user: ", user)
            res.json(user);
         })

   } else {
      const noUser = {
         loggedIn: false,
         username: ""
      }
      res.json(noUser);
   }
});


// Route to authenticate user sign up
// =========================================================

router.post("/signup", (req, res, next) => {

   passport.authenticate("local-signup", (err, user, opts) => {
      if (err) {
         console.log("Error: ", err);
         return res.status(401).send("Error occurred");
      }

      if (!user) {
         console.log("Not a user.")
         return res.status(401).send(opts.message);
      }

      req.login(user, err => {
         if (err) {
            console.log("auth error")
            return res.status(401).send("Signup failed");
         }

         res.cookie("username", req.user.username);
         res.cookie("user_id", req.user.id);
         return res.redirect("/");
      });

   })(req, res, next);
});


// Route to authenticate user login
// =========================================================

router.post("/login", (req, res, next) => {

   passport.authenticate("local-login", (err, user) => {
      if (err) {
      console.log("Error: ", err);
      return res.status(401).send("Login failed");
      }
      
      if (!user) {
      console.log("Not a user.");
      return res.status(401).send("Login failed");
      }
      
      req.login(user, (err) => {
      
      if (err) {
      console.log("auth error");
      return res.status(401).send("Login failed");
      }
      
      res.redirect("/profile");
      })
      
   })(req, res, next);
      
});


// Route to handle logout
// =========================================================

router.get("/logout", function (req, res) {

   req.session.destroy(function (err) {
     if (err) {
      res.status(500).json();
      return 
     }

     res.clearCookie("user_id");
     res.clearCookie("username");
     res.clearCookie("connect.sid");
     res.json();
   });

 });

module.exports = router;
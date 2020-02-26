const router = require("express").Router();
const dbUsers = require("../../models/user")

router.get("/", function(req, res){
  dbUsers.find({})
.then(function(users) {
    res.json(users);
})
.catch(function(err) {
    return err;
});
});
        
module.exports = router;
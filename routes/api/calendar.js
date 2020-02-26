const router = require("express").Router();
const tripsController = require("../../controllers/calendar")

router.get("/populated", function(req, res){
    if (req.isAuthenticated()) {
        tripsController.get(req,res);
    }
    else {
        res.status(401).send("Not authenticated");
    }
});
        
router.post("/add",
    tripsController.add
)

router.post("/delete",
    tripsController.delete
)
router.get("/trip",
    tripsController.getTrip
)
router.post("/update",
    tripsController.update
)

    module.exports = router;
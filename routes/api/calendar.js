const router = require("express").Router();
const tripsController = require("../../controllers/calendar")

router.get("/populated/:id", function(req, res){
    req.body.id = req.params.id
    tripsController.get(req.body, function(data){
        res.json(data)
    })
});

    // router.delete("/api/trips/:id", function(req, res){
    //     const query ={};
    //     query._id = req.params.id;
    //     tripsController.delete(query, function(err, data){
        //         res.json(data)
        //     })
        // });
        
router.post("/add/:id", function(req, res){
    req.body.id = req.params.id;
    tripsController.add(req.body, function(data){
        res.json(data);
    })
})

    module.exports = router;
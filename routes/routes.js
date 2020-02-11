const tripsController = require("../controllers/trips")

module.exports = function(router){
    router.get("/api/trips/:user_id?", function(req, res){
        const query = {};
        if(req.params.user_id){
            query._id = req.params.title_id;
        }
        tripsController.get(query, function(err, data){
            res.json(data)
        })
    });

    router.delete("/api/trips/:id", function(req, res){
        const query ={};
        query._id = req.params.id;
        tripsController.delete(query, function(err, data){
            res.json(data)
        })
    });

    router.post("/api/trips", function(req, res){
        tripsController.save(req.body, function(data){
            res.json(data);
        })
    })
}
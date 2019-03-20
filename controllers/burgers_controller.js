var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions
// -all();
// -create();
// -update();
var burger = require("../models/burger.js");

// Get ALL them burgers, then send them to index.handlebars pls
router.get("/", function(req, res) {
    burger.all(function(data) {
        var handleBarsObj = {
            burgers: data
        };
        console.log(handleBarsObj);
        res.render("index", handleBarsObj);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.create([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function(result) {
        res.json({ id: result.insertID});
    });
});

// Sir, give me the :id burger, just one plz, thank you
router.put("/api/burgers/:id", function(req, res) {
    var condition = "id= " + req.params.id;

    console.log("condition", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, function(result) {
        if(result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes to server.js
module.exports = router;



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

router.post('/api/burgers', function(req, res) {
    burger.addBurger(req.body.burger_name, function() {
        res.redirect('/');
    });

});


router.put("/api/burgers/:id", function(req, res) {
    burger.devour(req.params.id, function() {
        res.redirect("/");
    });
});

// Export routes to server.js
module.exports = router;



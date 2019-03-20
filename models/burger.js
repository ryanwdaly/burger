// Import ORm to create functions that will interact with the database
var orm = require("../config/orm.js");

// Create burger object w/ object functions
var burger = {
    // List all the burgers
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        })
    },
    // Create new burger for "burgers" table (val and cols are arrays)
    create: function(cols, vals, cb) {
        orm.create("burgers", vals, cols, function (res) {
            cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (catsController.js)
module.exports = burger;
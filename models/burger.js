// Import ORm to create functions that will interact with the database
let orm = require("../config/orm.js");

// Create burger object w/ object functions
let burger = {
    // List all the burgers
    all: function(cb) {
        orm.all(function(res) {
            cb(res);
        });
    },
    // Create new burger for "burgers" table (val and cols are arrays)
    addBurger: function(burgerName, cb) {
        orm.addBurger(burgerName, function(res) {
          cb(res);
        });
      },
    devour: function(id, cb) {
        orm.devour(id, function(res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller
module.exports = burger;
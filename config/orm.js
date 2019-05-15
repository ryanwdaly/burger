var connection = require("../config/connection.js");

var orm = {
    all: function(cb) {
        let queryString = "SELECT * FROM burgers;";
        connection.query(queryString, function(err, result) {
            if(err) {
                throw err;
            }
            cb(result);
        });
    },
    devour: function(id, cb) {
        console.log("id",id)
        id = id.substr(1)
        let queryString = "UPDATE burgers SET devoured = 1 WHERE id = ";
        queryString += id;
        queryString += ";";

        console.log(queryString);

        connection.query(queryString, function(err, result) {
            if(err) {
                throw err;
            }
                cb(result);
        });
    },
    addBurger: function(burgerName, cb) {
		// Construct the query string that inserts a single row into the target table
		let queryString = "INSERT INTO burgers (burger_name, devoured) VALUES ('";
        queryString += burgerName;
        queryString += "', 0);";

		console.log(queryString);

		// Perform the database query
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}

			// Return results in callback
			cb(result);
		});

    }
}

module.exports = orm;


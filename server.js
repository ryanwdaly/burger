var express = require("express");
var PORT = process.env.PORT || 8080;

var app = express();

// Serve up all data in the public directory
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Import routes and give the server access to them
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Start the server so that it can begin listening to client request
app.listen(PORT, function() {
    // Log when the server started
    console.log("Server listening on: http://localhost:" + PORT);
});
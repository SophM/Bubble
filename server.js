// ---------------------------------------------------
// Dependencies
// --------------------------------------------------- 

// load the Express node packages
var express = require("express");


// ---------------------------------------------------
// Configuration of the Express app
// --------------------------------------------------- 

// create an Express app
var app = express();

// set the port of the application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 3000;

// set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set up the Express app so it will be able to use my css stylesheet
app.use(express.static("./app/public"));


// ---------------------------------------------------
// Routes
// --------------------------------------------------- 

// link the "route" files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// ---------------------------------------------------
// Start the server
// --------------------------------------------------- 

// start the server
// so that it can begin listening to client requests.
app.listen(PORT, function() {
    console.log("App listening on: http://localhost:" + PORT);
});
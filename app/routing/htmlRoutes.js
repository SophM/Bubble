// ---------------------------------------------------
// Dependencies
// --------------------------------------------------- 

// load the node package "path"
var path = require("path");


// ---------------------------------------------------
// Routing
// --------------------------------------------------- 

// export a function to be able to answer the different requests made by the user
module.exports = function(app) {
    // get request to display the home page
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    // get request to display the cocktail-survey page
    app.get("/cocktail-survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/cocktailSurvey.html"));
    });

    // get request to display the beer-survey page
    app.get("/beer-survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/beerSurvey.html"));
    });

    // get request to display the wine-survey page
    app.get("/wine-survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/wineSurvey.html"));
    });

    // get request to display the home page if no matching route is found
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

}; 

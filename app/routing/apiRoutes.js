// ---------------------------------------------------
// Dependencies
// --------------------------------------------------- 

// load the data for cocktails, beers and wines
var cocktailData = require("../data/cocktails");
var beerData = require("../data/beers");
var wineData = require("../data/wines");


// ---------------------------------------------------
// Routing
// --------------------------------------------------- 

// export a function to be able to answer the different requests made by the user
module.exports = function(app) {
    // get request to display the cocktail data in a JSON format
    // when the user visits the "/api/cocktails" page
    app.get("/api/cocktails", function(req, res) {
        res.json(cocktailData);
    });

    // get request to display the beer data in a JSON format
    // when the user visits the "/api/beers" page
    app.get("/api/beers", function(req, res) {
        res.json(beerData);
    });

    // get request to display the wine data in a JSON format
    // when the user visits the "/api/wines" page
    app.get("/api/wines", function(req, res) {
        res.json(wineData);
    });

    // post request to handle the incoming survey results from the cocktail survey
    // and determine the compatibility with one of the cocktails
    app.post("/api/cocktails", function(req, res) {

    });

    // post request to handle the incoming survey results from the beer survey
    // and determine the compatibility with one of the beers
    app.post("/api/beers", function(req, res) {

    });

    // post request to handle the incoming survey results from the wine survey
    // and determine the compatibility with one of the wines
    app.post("/api/wines", function(req, res) {

    });
};
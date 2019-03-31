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
        // grab the data sent by the user on "submit" 
        var userScore = req.body;

        // initialize a few variables needed for the comparison below
        var smallestDiff = 1000;
        var cocktailWithSmallestDiff = {};

        // for-loop to go through the cocktail catalog
        for (var i = 0; i < cocktailData.length; i++) {
            // initialize the "totalDiff" variable - inside the loop
            // because needs to go back to zero for each new cocktail compared to the user score
            var totalDiff = 0;
            // second for-loop to go through the "score" array
            for (var j = 0; j < userScore.score.length; j++) {
                // compare the score of the user to the score of the cocktail "i" 
                // question by question - get the absolute value of the difference
                // and add it to the "totalDiff" variable
                totalDiff += Math.abs(cocktailData[i].score[j] - userScore.score[j]);
            }

            // if the "totalDiff" value is inferior to the "smallestDiff" value
            if (smallestDiff > totalDiff) {
                // the "totalDiff" value becomes the "smallestDiff" value
                smallestDiff = totalDiff;
                // and the cocktail corresponding to this small "totalDiff" value is stored
                cocktailWithSmallestDiff = cocktailData[i];
            }   
        }
        // sent back to the user the data for the cocktail with the smallest difference
        res.json(cocktailWithSmallestDiff);
    });

    // post request to handle the incoming survey results from the beer survey
    // and determine the compatibility with one of the beers
    app.post("/api/beers", function(req, res) {
        // grab the data sent by the user on "submit" 
        var userScore = req.body;
        // little tests to confirm how to parse the data
        // console.log(userScore.score);
        // console.log(userScore.score.length);
        // console.log(beerData.length);
        // console.log(beerData[0].score);

        // initialize a few variables needed for the comparison below
        var smallestDiff = 1000;
        var beerWithSmallestDiff = {};

        // for-loop to go through the beer catalog
        for (var i = 0; i < beerData.length; i++) {
            // initialize the "totalDiff" variable - inside the loop
            // because needs to go back to zero for each new beer compared to the user score
            var totalDiff = 0;
            // second for-loop to go through the "score" array
            for (var j = 0; j < userScore.score.length; j++) {
                // compare the score of the user to the score of the beer "i" 
                // question by question - get the absolute value of the difference
                // and add it to the "totalDiff" variable
                totalDiff += Math.abs(beerData[i].score[j] - userScore.score[j]);
            }

            // if the "totalDiff" value is inferior to the "smallestDiff" value
            if (smallestDiff > totalDiff) {
                // the "totalDiff" value becomes the "smallestDiff" value
                smallestDiff = totalDiff;
                // and the beer corresponding to this small "totalDiff" value is stored
                beerWithSmallestDiff = beerData[i];
            }   
        }
        // to test the logic
        // console.log(smallestDiff);
        // console.log(beerWithSmallestDiff);

        // sent back to the user the data for the beer with the smallest difference
        res.json(beerWithSmallestDiff);
    });

    // post request to handle the incoming survey results from the wine survey
    // and determine the compatibility with one of the wines
    app.post("/api/wines", function(req, res) {
        // grab the data sent by the user on "submit" 
        var userScore = req.body;

        // initialize a few variables needed for the comparison below
        var smallestDiff = 1000;
        var wineWithSmallestDiff = {};

        // for-loop to go through the wine catalog
        for (var i = 0; i < wineData.length; i++) {
            // initialize the "totalDiff" variable - inside the loop
            // because needs to go back to zero for each new wine compared to the user score
            var totalDiff = 0;
            // second for-loop to go through the "score" array
            for (var j = 0; j < userScore.score.length; j++) {
                // compare the score of the user to the score of the wine "i" 
                // question by question - get the absolute value of the difference
                // and add it to the "totalDiff" variable
                totalDiff += Math.abs(wineData[i].score[j] - userScore.score[j]);
            }

            // if the "totalDiff" value is inferior to the "smallestDiff" value
            if (smallestDiff > totalDiff) {
                // the "totalDiff" value becomes the "smallestDiff" value
                smallestDiff = totalDiff;
                // and the wine corresponding to this small "totalDiff" value is stored
                wineWithSmallestDiff = wineData[i];
            }   
        }
        // sent back to the user the data for the wine with the smallest difference
        res.json(wineWithSmallestDiff);
    });
};
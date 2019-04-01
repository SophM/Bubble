// ---------------------------------------------------
// Cocktail data
// --------------------------------------------------- 

// question
// A. 0-Whisky / 10-Rhum / 20-Vodka / 30-Tequila / 40-Gin
// B. 0-not travel / 50-travel
// C. 1-not spicy / 5-spicy
// D. 1-not sweet / 5-sweet
// E. 1-not fruit / 5-fruit

// big array of objects to hold all the cocktail data
// = catalog of cocktails to compare the cocktail-survey results to
var cocktailCatalog = [
    {
        name: "Old-Fashioned",
        recipe: "https://iba-world.com/iba-official-cocktails/old-fashioned/",
        picture: "https://cdn.liquor.com/wp-content/uploads/2011/08/anjeo-old-fashioned1.jpg",
        score: [
            0,
            0,
            1,
            1,
            1
        ]
    },
    {
        name: "Casanova",
        recipe: "https://www.diffordsguide.com/cocktails/recipe/383/casanova",
        picture: "https://cdn.diffords.com/contrib/stock-images/2016/7/31/2016a5f254ed9ac2f342869c45d9a25b5994.jpg",
        score: [
            0,
            0,
            1,
            3,
            1
        ]
    },
    {
        name: "Mojito",
        recipe: "https://iba-world.com/cocktails/mojito/",
        picture: "https://d2hlgqbx7hj7sl.cloudfront.net/detail_Skinny_Mojito_4.png?mtime=20151201224540",
        score: [
            10,
            50,
            1,
            3,
            2
        ]
    },
    {
        name: "Hot Buttered Rum",
        recipe: "https://www.foodnetwork.com/recipes/rachael-ray/hot-buttered-rum-recipe-1943195",
        picture: "https://spicysouthernkitchen.com/wp-content/uploads/Hot-Buttered-Rum-3.jpg",
        score: [
            10,
            0,
            3,
            4,
            1
        ]
    },
    {
        name: "Planter's Punch",
        recipe: "https://iba-world.com/iba-official-cocktails/planters-punch/",
        picture: "https://theblondcook.com/wp-content/uploads/2012/09/planters-punch-6.jpg",
        score: [
            10,
            50,
            1,
            5,
            5
        ]
    },
    {
        name: "Bloody Mary",
        recipe: "https://iba-world.com/cocktails/bloody-mary/",
        picture: "https://soufflebombay.com/wp-content/uploads/2014/05/Best-Bloody-Mary-small.jpg",
        score: [
            20,
            0,
            5,
            1,
            1
        ]
    },
    {
        name: "Sex on the Beach",
        recipe: "https://iba-world.com/cocktails/sex-on-the-beach/",
        picture: "https://stevethebartender.com.au/wp-content/uploads/2013/06/sex-on-the-beach-cocktail.jpg",
        score: [
            20,
            50,
            1,
            4,
            4
        ]
    },
    {
        name: "Margarita",
        recipe: "https://iba-world.com/cocktails/margarita/",
        picture: "https://mmac-geckowebdevelopm1.netdna-ssl.com/images/cocktails/6868/300_450_margarita_2_2.jpg",
        score: [
            30,
            50,
            1,
            1,
            1
        ]
    },
    {
        name: "Tequila Sunrise",
        recipe: "https://iba-world.com/cocktails/tequila-sunrise/",
        picture: "https://mmac-geckowebdevelopm1.netdna-ssl.com/images/cocktails/6743/300_375_tequilasunrise.jpg",
        score: [
            30,
            50,
            1,
            4,
            4
        ]
    },
    {
        name: "Tequila Manhattan",
        recipe: "https://food52.com/recipes/65018-tequila-manhattan",
        picture: "https://cdn.liquor.com/wp-content/uploads/2013/04/Tegroni.jpg",
        score: [
            30,
            0,
            1,
            2,
            2
        ]
    },
    {
        name: "Gin Fizz",
        recipe: "https://iba-world.com/iba-official-cocktails/gin-fizz/",
        picture: "https://www.williams-sonoma.com/wsimgs/rk/images/dp/recipe/201851/0015/img70l.jpg",
        score: [
            40,
            0,
            1,
            2,
            1
        ]
    },
    {
        name: "Monkey Gland",
        recipe: "https://iba-world.com/iba-official-cocktails/monkey-gland/",
        picture: "https://4.bp.blogspot.com/-qlh2qS7VYBk/XCQsUT0HoYI/AAAAAAAAEtg/t7FfhDLpZwst-JnQ0XuRHjGyLJdNeg4YQCLcBGAs/s1600/Monkey-Gland-Cocktail-027-websize-x500.jpg",
        score: [
            40,
            0,
            1,
            4,
            3
        ]
    },
    {
        name: "Singapore Sling",
        recipe: "https://iba-world.com/cocktails/singapore-sling/",
        picture: "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2018/10/singapore-sling.jpg?itok=H04HU8XN",
        score: [
            40,
            50,
            1,
            4,
            5
        ]
    },
];

// export the cocktail data to make it accessible to the apiRoutes file
module.exports = cocktailCatalog;
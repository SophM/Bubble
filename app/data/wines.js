// ---------------------------------------------------
// Wine data
// --------------------------------------------------- 

// question
// 1. sweet
// 2. tannic
// 3. sparkling
// 4. spicy
// 5. fruity

// big array of objects to hold all the wine data
// = catalog of wines to compare the wine-survey results to
var wineCatalog = [
    {
        name: "Cabernet Sauvignon",
        picture: "",
        score: [
            1,
            4,
            1,
            3,
            4
        ]

    },
    {
        name: "Zinfandel",
        picture: "",
        score: [
            1,
            5,
            1,
            2,
            5
        ]

    },
];

// export the wine data to make it accessible to the apiRoutes file
module.exports = wineCatalog;
// ---------------------------------------------------
// Beer data
// --------------------------------------------------- 

// question
// A. 1-light / 5-strong
// B. 1- not bitter / 5-bitter
// C. 1-not fruity / 5-fruity
// D. 1- not sour / 5-sour

// big array of objects to hold all the beer data
// = catalog of beers to compare the beer-survey results to
var beerCatalog = [
    {
        name: "Guiness Draught",
        picture: "https://www.irishcentral.com/uploads/article/126375/cropped_GUINNESS.jpg?t=1528116858",
        score: [
            3,
            3,
            1,
            1,
        ]

    },
    {
        name: "Linderman Framboise",
        picture: "https://cdn2.bigcommerce.com/server5500/tpbc2s65/products/174/images/215/lambicframboise12oz__18888.1350074045.1280.1280.jpg?c=2",
        score: [
            1,
            1,
            5,
            1,
        ]

    },
    {
        name: "Samuel Adams Boston Lager",
        picture: "https://www.totalwine.com/media/sys_master/twmmedia/hf8/h7e/8806398689310.png",
        score: [
            3,
            2,
            1,
            1,
        ]

    },
    {
        name: "Grapefruit Sculpin",
        picture: "https://beerconnoisseur.com/sites/default/files/styles/beer_page_245w/public/beer/ballast-point-grapefruit-sculpin.jpg?itok=V20G16iO",
        score: [
            4,
            5,
            4,
            2,
        ]

    },
    {
        name: "60 minutes IPA",
        picture: "https://beerboard.com/uploads/brand_image/cover/113/Bottleshot_60.jpg",
        score: [
            4,
            4,
            1,
            1,
        ]

    },
    {
        name: "Sofie",
        picture: "https://img.saveur-biere.com/img/p/26918-42852-v4_product_img.jpg",
        score: [
            4,
            2,
            2,
            2,
        ]

    },
    {
        name: "Gillian",
        picture: "http://www.totalwine.com/media/sys_master/twmmedia/h69/h1e/10027628691486.png",
        score: [
            5,
            2,
            3,
            5,
        ]

    },
    {
        name: "PassionFruit Sour Ale",
        picture: "http://breakside.com/wp-content/uploads/2018/03/PFSA@2x-min.png",
        score: [
            3,
            1,
            5,
            5,
        ]

    },
];

// export the beer data to make it accessible to the apiRoutes file
module.exports = beerCatalog;
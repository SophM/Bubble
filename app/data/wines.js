// ---------------------------------------------------
// Wine data
// --------------------------------------------------- 

// question
// A. 0-red / 10-white / 20-rose
// B. 0-not sparkling / 30-sparkling
// C. 1-light / 5-strong
// D. 1-not sweet / 5-sweet
// E. 1-not fruity / 5-fruity
// F. 1-not crisp / 5-crisp

// big array of objects to hold all the wine data
// = catalog of wines to compare the wine-survey results to
var wineCatalog = [
    {
        name: "Cabernet Sauvignon",
        picture: "http://www.menageatroiswines.com/sites/default/files/CabernetSauvignon.png",
        score: [
            0,
            0,
            4,
            1,
            2,
            3
        ]

    },
    {
        name: "Gamay",
        picture: "https://www.garyswine.com/images/sites/garyswine/labels/chateau-de-corcelles-les-copains-d-abord-gamay-le-premier-soir_1.jpg",
        score: [
            0,
            0,
            2,
            2,
            3,
            4
        ]

    },
    {
        name: "Zinfandel",
        picture: "https://www.totalwine.com/media/sys_master/twmmedia/hd3/h19/10678905896990.png",
        score: [
            0,
            0,
            5,
            1,
            5,
            2
        ]

    },
    {
        name: "Chardonnay",
        picture: "http://www.lisasliquorbarn.com/wp-content/uploads/2012/09/p-16190-Chateau-St-Jean-Chard.png",
        score: [
            10,
            0,
            4,
            1,
            4,
            3
        ]

    },
    {
        name: "Riesling",
        picture: "https://www.eckeroline.com/media/catalog/product/cache/image/700x560/af097278c5db4767b0fe9bb92fe21690/k/u/kung_fu_girl_riesling.png",
        score: [
            10,
            0,
            1,
            3,
            5,
            5
        ]

    },
    {
        name: "Sauvignon Blanc",
        picture: "https://winesisterhood.imgix.net/common/images/products/MS.SauvBlanc.png?auto=compress,format&fit=fill&max-h=400",
        score: [
            10,
            0,
            3,
            1,
            5,
            5
        ]

    },
    {
        name: "Grenache Rosé",
        picture: "https://smhttp-ssl-54521.nexcesscdn.net/media/catalog/product/cache/1/thumbnail/500x800/9df78eab33525d08d6e5fb8d27136e95/h/a/hancock-hancock-grenache-rose-mclaren-vale.jpg",
        score: [
            20,
            0,
            3,
            2,
            4,
            3
        ]

    },
    {
        name: "Syrah Rosé",
        picture: "https://www.arrogant-frog.com/wp-content/uploads/Arrogant-Frog-Syrah-Rose.jpg",
        score: [
            20,
            0,
            4,
            1,
            1,
            2
        ]

    },
    {
        name: "Lambrusco Secco",
        picture: "https://www.riunite.it/wp-content/uploads/2015/03/Emilia_secco.png",
        score: [
            0,
            10,
            2,
            2,
            5,
            4
        ]

    },
    {
        name: "Champagne",
        picture: "https://cdn1.wine-searcher.net/images/labels/68/87/nicolas-feuillatte-brut-champagne-france-10516887.jpg",
        score: [
            10,
            10,
            3,
            1,
            2,
            5
        ]

    },
    {
        name: "Crémant Rosé",
        picture: "http://images.honestcooking.com/wp-content/uploads/2018/06/Screen-Shot-2018-06-11-at-10.58.49-AM.png",
        score: [
            20,
            10,
            2,
            1,
            2,
            5
        ]

    },
];

// export the wine data to make it accessible to the apiRoutes file
module.exports = wineCatalog;
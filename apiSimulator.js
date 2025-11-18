var getProductDetails = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Product Details");
        resolve({ id: 1, name: "dog", price: 4.99, category: 'pet' });
    }, 1000);
});
var getProductReviews = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Product Reviews");
        resolve([
            {
                productId: 1,
                reviewer: "Tishana",
                rating: 2,
                comment: "Do not recommend.",
            },
            { productId: 1, reviewer: "Bryan", rating: 4, comment: "It was aight." },
        ]);
    }, 1000);
});
var getRelatedProducts = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Related products");
        resolve([
            {
                id: 3,
                name: "fish",
                price: 0.99,
                category: 'pet'
            },
            {
                id: 3,
                name: "hamster",
                price: 5.99,
                category: 'pet'
            }
        ]);
    }, 1000);
});
getProductDetails
    .then(function (p) { return getProductReviews; })
    .then(function (r) { return getRelatedProducts; })
    .catch(function (e) {
    console.error(e);
});

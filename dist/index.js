import { fetchProductCatalog, fetchProductReviews, fetchSalesReport } from "./apiSimulator.js";
// import type {productID} from  ".type/apiSimulator.js";
// Use fetchProductCatalog() to fetch product details & display them.
//product = {}
// class Network extends Error {
//     constructor(message:any. errorCode) {
//         super(message);
//         this.name ="NetworkErrors";
//         this.errorCode = errorCode;
//     }
// }
//keep getting type errors so commenting out until i can get it working
fetchProductCatalog()
    .then((product) => {
    console.log("Product Catalog:");
    const eachProduct = product[0];
    return fetchProductReviews(eachProduct.id);
})
    .then((reviews) => {
    console.log("Product Reviews", reviews);
    return fetchSalesReport();
})
    .then((salesReport) => {
    console.log("Sales Report", salesReport);
})
    .catch((error) => {
    console.log("Error", error);
})
    .finally(() => {
    console.log("Everything is cool here");
});
//# sourceMappingURL=index.js.map
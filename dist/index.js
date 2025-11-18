import { fetchProductCatalog, fetchProductReviews, fetchSalesReport } from "./apiSimulator.js";
// Use fetchProductCatalog() 
// to fetch product details and display them.
fetchProductCatalog().then((Products) => {
    console.log("Verified Products");
    console.log(Products);
    return fetchProductReviews(productId).then();
});
// For each product, fetch the reviews using fetchProductReviews(productId).
// After fetching products and reviews, retrieve the sales report using fetchSalesReport()
//# sourceMappingURL=index.js.map
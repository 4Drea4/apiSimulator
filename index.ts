
import fetchProductCatalog = require("./productCatalog.js")

import { fetchProductReviews } from "./productReviews.js"

import { fetchSalesReport} from "./salesReport.js"

fetchProductCatalog()
.then((name:string) => {
    console.log("This is a", name);
    return fetchProductReviews
}
)
// Use fetchProductCatalog() 
// to fetch product details and display them.

// For each product, fetch the reviews using fetchProductReviews(productId).

// After fetching products and reviews, retrieve the sales report using fetchSalesReport()

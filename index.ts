
import fetchProductCatalog = require("./productCatalog.js")

// import { ProductCatalog} from "".productCatalog.ts";

import { fetchProductReviews } from "./productReviews.js"

import { fetchSalesReport} from "./salesReport.js"


// Use fetchProductCatalog() 
// to fetch product details and display them.
fetchProductCatalog().then((Products: ProductCatalog[]) =>{
    console.log(Products );
    return fetchProductReviews();
})


// For each product, fetch the reviews using fetchProductReviews(productId).

// After fetching products and reviews, retrieve the sales report using fetchSalesReport()

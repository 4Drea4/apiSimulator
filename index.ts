
import fetchProductCatalog = require("./productCatalog.js")
import ProductCatalog = require("./productCatalog.js")
// import { ProductCatalog} from "".productCatalog.ts";

import { fetchProductReviews } from "./productReviews.js"

import { fetchSalesReport} from "./salesReport.js"


// Use fetchProductCatalog() 
// to fetch product details and display them.
fetchProductCatalog().then((Products: ProductCatalog[]) =>{
    console.log("Verified Products");
    console.log(Products);

    return fetchProductReviews(productId).then();
})


// For each product, fetch the reviews using fetchProductReviews(productId).

// After fetching products and reviews, retrieve the sales report using fetchSalesReport()

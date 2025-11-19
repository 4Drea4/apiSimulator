import { fetchProductCatalog, fetchProductReviews,fetchSalesReport } from "./apiSimulator.js";
// import type {productID} from  ".type/apiSimulator.js";

// Use fetchProductCatalog() to fetch product details & display them.
//product = {}
 
   
    fetchProductCatalog()
  .then((product) => {
    console.log("Product Catalog:");

    const eachProduct = product[0]!;
    return fetchProductReviews(eachProduct.id);
  })

  .then((reviews) => {
    console.log("Product Reviews", reviews);
    return fetchSalesReport();
  })

  .then((salesReport) => {
    console.log("Sales Report", salesReport);
  })

  .catch((NetworkError) => {
    console.log("Network Error", NetworkError);
  })

  .finally(() => {
    console.log("Everything is cool here");
    });


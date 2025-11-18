export interface ProductReviews {
    userName: string;
    userReview: string;
    name: string;
    productId:string | number;
}
export const fetchProductReviews = (ProductCatalog : any): Promise<ProductReviews[]> => {
    return new Promise((resolve, reject) =>{
    setTimeout(() => {
        if (Math.random() < 0.15){
            resolve([
            { userName: "Andrea" , userReview: "This was so delicious, I am ordering ten more", name: "Waffle Sticks" , productId: "1234-AB"},
            ]);

        } else {
            reject("Failed to fetch reviews for product ID ${productId");
        }
    }, 1500);  
  });
};
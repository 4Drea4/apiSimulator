import { NetworkError } from "./error.js";
export const fetchProductReviews = (productId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.80) {
                resolve([
                    { userName: "Andrea",
                        userReview: "This was so delicious, it was incredible omg. When I was walking around hungry unsatisfied by the prices and repetitveness of Dunkin Starbucks Mcdonalds even a huge sign said waffle sticks, I am ordering ten more",
                        name: "Waffle Sticks",
                        productId: "1234-AB" },
                ]);
            }
            else {
                reject(new NetworkError(`Failed to fetch reviews for product ID ${productId}`));
            }
            ;
        }, 1500);
    });
};
export const fetchProductCatalog = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve([
                    { id: 1, name: "Laptop", price: 1200 },
                    { id: 2, name: "Headphones", price: 200 },
                ]);
            }
            else {
                reject(new NetworkError("Failed to fetch product catalog"));
            }
        }, 1000);
    });
};
export const fetchSalesReport = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > .75) {
                resolve([
                    {
                        totalSales: 154266,
                        unitsSold: 4500,
                        averagePrice: 40,
                    }
                ]);
            }
            else {
                reject(new NetworkError(`Failed to fetch Sales Report `));
            }
            ;
        }, 1000);
    });
};
//# sourceMappingURL=apiSimulator.js.map
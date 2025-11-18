

interface ProductCatalog{
        id: number | string;
        name: string;
        price: number;
    }

interface ProductReviews {
        userName: string;
        userReview: string;
        name: string;
        productId:string | number;
}

interface SalesReport {
    totalSales: number;
    unitsSold: number;
    averagePrice: number;
}
    
export const fetchProductCatalog = (): Promise<{id: 
    number; name: string; price: number }[]> => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.8) {
        resolve([
            { id: 1, name: "Laptop", price: 1200 },
            { id: 2, name: "Headphones", price: 200 },
        ]);
        } else {
        reject("Failed to fetch product catalog");
        }
    }, 1000);
    });
};

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
    export const fetchSalesReport =( SalesReport: any):
    Promise<SalesReport[]> => {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                if(Math.random() > 6){
                    resolve([
                       {
                        totalSales: 154,266,
                        unitsSold: 4500,
                        averagePrice: 40,
                        }
                    ]);
                }else{
                    reject("Failed to fetch sales report");
                }
            }, 1000);
        } );
    };





export interface SalesReport {
    totalSales: number;
    unitsSold: number;
    averagePrice: number;
}
export const fetchSalesReport =( SalesReport: any):
Promise<SalesReport[]> => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(Math.random() > 6){
                resolve([
                   {
                    totalSales: 154266,
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


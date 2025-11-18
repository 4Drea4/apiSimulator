export interface ProductReviews {
    userName: string;
    userReview: string;
    name: string;
    productId: string | number;
}
export declare const fetchProductReviews: (ProductCatalog: any) => Promise<ProductReviews[]>;
export interface ProductCatalog {
    id: number | string;
    name: string;
    price: number;
}
export declare const fetchProductCatalog: () => Promise<{
    id: number;
    name: string;
    price: number;
}[]>;
export interface SalesReport {
    totalSales: number;
    unitsSold: number;
    averagePrice: number;
}
export declare const fetchSalesReport: (SalesReport: any) => Promise<SalesReport[]>;
//# sourceMappingURL=apiSimulator.d.ts.map
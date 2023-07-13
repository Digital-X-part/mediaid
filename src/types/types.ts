export interface ProductType {
    name: string;
    description: string;

    highlights: string[];
    price: {
        prev: number;
        present: number;
    };
    images: string[];
    categories: string[];
    availableStock: number;
    tags: string[];
    startDate: Date;
    sellingType: string[];
    totalSales: number;
}

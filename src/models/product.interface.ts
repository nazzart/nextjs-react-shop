export interface Products {
    products: Product[]
}

export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    thumbnail: string;
    category: string;
    brand: string;
    sku: string;
    quantity?: number 
}

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    brand: string;
    sku: string;
    inventory: {
        [key: string] : number
    }
}

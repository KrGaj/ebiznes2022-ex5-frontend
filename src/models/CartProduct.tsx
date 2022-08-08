import {Product} from "./Product";

export interface CartProduct {
    id: string;
    product: Product;
    user: {
        id: string
        email: string
    }
    amount: number;
}
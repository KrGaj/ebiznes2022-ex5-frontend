import axios from "../config/axios";
import { Product } from "../models/Product";
import { CartProduct } from "../models/CartProduct";
import { AuthData } from "../models/AuthData";

export const fetchCartProducts = async (user: AuthData): Promise<CartProduct[]> => {
    return axios(user.token).get("/cart", {
        params: {
            user_id: user.userId
        }
    })
}

export const addToCart = async (product: Product, user: AuthData): Promise<CartProduct[]> => {
    const cartProduct: CartProduct = {
        id: "",
        product: product,
        user: {
            id: user.userId,
            email: user.email
        },
        amount: 1
    }

    return axios(user.token).post("/cart", cartProduct)
}

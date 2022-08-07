import {Product} from "../models/Product";
import {AuthData} from "../models/AuthData";
import { addToCart } from "../api/cart";


function useCart(user: AuthData) {
    function addProduct(product: Product) {
        addToCart(product, user)
    }

    return {
        addProduct
    }
}

export default useCart

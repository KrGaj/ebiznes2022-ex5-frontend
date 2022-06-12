import {useState} from "react";
import {Product} from "../models/Product";

function useCart() {
    const [ cart, setCart ] = useState<Product[]>([])

    // function getCart() {
    //
    // }

    function addProduct(product: Product) {
        setCart([...cart, product]);
    }

    function removeProduct(productId: string) {
        const products = cart.filter(item => item.id !== productId)
    }

    return {
        cart,
        addProduct,
        removeProduct
    }
}

export default useCart

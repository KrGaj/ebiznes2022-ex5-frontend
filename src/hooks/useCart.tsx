import {useEffect, useState} from "react";
import {Product} from "../models/Product";
import {CartProduct} from "../models/CartProduct";


function useCart() {
    const [ cart, setCart ] = useState<CartProduct[]>([])
    const [ localProductId, setLocalProductId ] = useState<number>(0)

    useEffect(() => {
        console.log("Cart changed. Now: " + cart)
    }, [cart])

    function addProduct(product: Product) {
        let cartProducts = cart.filter(item => item.product.id === product.id);

        if(cartProducts.length === 0) {
            const newProduct: CartProduct = {
                id: localProductId.toString(),
                product: product,
                quantity: 1
            }

            setCart([...cart, newProduct]);
            setLocalProductId(localProductId + 1)
        }
        else {
            const idx = cart.findIndex(item => item === cartProducts[0]);
            cart[idx].quantity += 1;
        }
    }

    function removeProduct(productId: string) {
        let cartProducts = cart.filter(item => item.product.id === productId);

        if(cartProducts.length !== 0) {
            if(cartProducts[0].quantity > 1) {
                const idx = cart.findIndex(item => item === cartProducts[0]);
                cart[idx].quantity -= 1;
            }
            else {
                const products = cart.filter(item => item.product.id !== productId);
                setCart([...products])
            }
        }
    }

    return {
        cart,
        addProduct,
        removeProduct
    }
}

export default useCart

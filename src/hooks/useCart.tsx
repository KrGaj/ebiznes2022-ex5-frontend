import {useEffect, useState} from "react";
import {Product} from "../models/Product";
import {CartProduct} from "../models/CartProduct";
import {AuthData} from "../models/AuthData";
import {addToCart, fetchCartProducts} from "../api/cart";


function useCart(user: AuthData) {
    const [ cart, setCart ] = useState<CartProduct[]>([])

    useEffect(() => {
        fetchCartProducts(user).then((foundProducts) => {
            setCart(foundProducts)
        })
    })

    function addProduct(product: Product) {
        addToCart(product, user)
    }

    return {
        cart,
        addProduct
    }
}

// function useCart() {
//     const [ cart, setCart ] = useState<CartProduct[]>([])
//     const [ localProductId, setLocalProductId ] = useState<number>(0)
//
//     useEffect(() => {
//         console.log("Cart changed. Now: " + cart)
//     }, [cart])
//
//     function addProduct(product: Product) {
//         let cartProducts = cart.filter(item => item.product.id === product.id);
//
//         if(cartProducts.length === 0) {
//             const newProduct: CartProduct = {
//                 id: localProductId.toString(),
//                 product: product,
//                 user: {
//                     id: "",
//                     email: ""
//                 },
//                 amount: 1
//             }
//
//             setCart([...cart, newProduct]);
//             setLocalProductId(localProductId + 1)
//         }
//         else {
//             const idx = cart.findIndex(item => item === cartProducts[0]);
//             cart[idx].amount += 1;
//         }
//     }
//
//     function removeProduct(productId: string) {
//         let cartProducts = cart.filter(item => item.product.id === productId);
//
//         if(cartProducts.length !== 0) {
//             if(cartProducts[0].amount > 1) {
//                 const idx = cart.findIndex(item => item === cartProducts[0]);
//                 cart[idx].amount -= 1;
//             }
//             else {
//                 const products = cart.filter(item => item.product.id !== productId);
//                 setCart([...products])
//             }
//         }
//     }
//
//     return {
//         cart,
//         addProduct,
//         removeProduct
//     }
// }

export default useCart

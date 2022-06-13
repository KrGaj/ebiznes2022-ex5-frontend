import React from "react";
import {ShopContextState} from "./types/ShopContextState";
import useCart from "../hooks/useCart";

const defaultValue: ShopContextState = {
    cartProducts: [],
    addProduct: () => {},
    removeProduct: () => {}
}

export const ShopContext = React.createContext(defaultValue)

export const ShopContextProvider: React.FC<{children: React.ReactElement}> = ({children}) => {
    const { cart, addProduct, removeProduct } = useCart()

    const providerValue: ShopContextState = {
        cartProducts: cart,
        addProduct,
        removeProduct
    }

    return (
        <ShopContext.Provider value={providerValue}>{children}</ShopContext.Provider>
    )
}

import React from "react";
import {ShopContextState} from "./types/ShopContextState";
import useCart from "../hooks/useCart";
import useAuth from "../hooks/useAuth";

const defaultValue: ShopContextState = {
    cartProducts: [],
    addProduct: () => {},
    removeProduct: () => {},

    loggedIn: false,
    userId: "",
    logIn: () => {},
    logOut: () => {},
    getLoginStatus: () => {}
}

export const ShopContext = React.createContext(defaultValue)

export const ShopContextProvider: React.FC<{children: React.ReactElement}> = ({children}) => {
    const { cart, addProduct, removeProduct } = useCart();
    const { loggedIn, userId, logIn, logOut, getLoginStatus } = useAuth();

    const providerValue: ShopContextState = {
        cartProducts: cart,
        addProduct,
        removeProduct,

        loggedIn,
        userId,
        logIn,
        logOut,
        getLoginStatus
    }

    return (
        <ShopContext.Provider value={providerValue}>{children}</ShopContext.Provider>
    )
}

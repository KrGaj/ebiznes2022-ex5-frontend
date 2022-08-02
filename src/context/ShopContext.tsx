import React from "react";
import {ShopContextState} from "./types/ShopContextState";
import useCart from "../hooks/useCart";
import useAuth from "../hooks/useAuth";

const defaultValue: ShopContextState = {
    cartProducts: [],
    addProduct: () => {},
    removeProduct: () => {},

    user: {
        loggedIn: false,
        accessToken: "",
        userId: "",
        username: "",
        email: ""
    },
    logIn: () => {},
    logOut: () => {},
    getLoginStatus: () => {}
}

export const ShopContext = React.createContext(defaultValue)

export const ShopContextProvider: React.FC<{children: React.ReactElement}> = ({children}) => {
    const { cart, addProduct, removeProduct } = useCart();
    const { user, logIn, logOut, getLoginStatus } = useAuth();

    const providerValue: ShopContextState = {
        cartProducts: cart,
        addProduct,
        removeProduct,

        user,
        logIn,
        logOut,
        getLoginStatus
    }

    return (
        <ShopContext.Provider value={providerValue}>{children}</ShopContext.Provider>
    )
}

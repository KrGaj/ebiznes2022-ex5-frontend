import React from "react";
import {ShopContextState} from "./types/ShopContextState";
import useAuth from "../hooks/useAuth";

const defaultValue: ShopContextState = {
    user: {
        loggedIn: false,
        token: "",
        userId: "",
        username: "",
        email: ""
    },
    logOut: Function
}

export const ShopContext = React.createContext(defaultValue)

export const ShopContextProvider: React.FC<{children: React.ReactElement}> = ({children}) => {
    const { user, logOut } = useAuth();

    const providerValue: ShopContextState = {
        user,
        logOut
    }

    return (
        <ShopContext.Provider value={providerValue}>{children}</ShopContext.Provider>
    )
}

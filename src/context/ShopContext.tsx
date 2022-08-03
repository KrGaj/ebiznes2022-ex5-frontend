import React from "react";
import {ShopContextState} from "./types/ShopContextState";
import useAuth from "../hooks/useAuth";

const defaultValue: ShopContextState = {
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
    const { user, logIn, logOut, getLoginStatus } = useAuth();

    const providerValue: ShopContextState = {
        user,
        logIn,
        logOut,
        getLoginStatus
    }

    return (
        <ShopContext.Provider value={providerValue}>{children}</ShopContext.Provider>
    )
}

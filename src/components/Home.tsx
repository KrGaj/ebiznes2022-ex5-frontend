import {useContext} from "react";
import {ShopContext} from "../context/ShopContext";

export function HomeComponent() {
    const { loggedIn, logIn, logOut, getLoginStatus } = useContext(ShopContext)


}
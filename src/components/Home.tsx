import {useContext, useEffect} from "react";
import {ShopContext} from "../context/ShopContext";
import {Cookies, getCookie, getCookies} from "typescript-cookie";

export function HomeComponent() {
    const { loggedIn, logIn, logOut, getLoginStatus } = useContext(ShopContext)
    getLoginStatus()

    useEffect(() => {
        console.log(getCookies())
        console.log(getCookie("user_info"))
    })

    // let loggedIn = false;

    if(loggedIn) {
        return (
            <div>
                <h4>Zalogowany :)</h4>
            </div>
        )
    }
    else {
        return (
            <div>
                <h4>Niezalogowany :(</h4>
            </div>
        )
    }
}
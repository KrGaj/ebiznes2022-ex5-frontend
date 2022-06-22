import {useEffect, useState} from "react";
import {fetchLoginStatus} from "../api/auth";
import { getCookie, setCookie, getCookies } from 'typescript-cookie';


function useAuth() {
    const [ loggedIn, setLoggedIn ] = useState(false)
    const [ userId, setUserId ] = useState<string>("")

    useEffect(() => {
        // console.log(getCookie("user_session"))
        console.log("User state changed: userId " + userId, " loggedIn " + loggedIn)
    });

    function logIn(userId: string) {
        setUserId(userId)
        setLoggedIn(true)
    }

    function logOut() {
        setUserId("")
        setLoggedIn(false)
    }

    function getLoginStatus() {
        fetchLoginStatus()
            .then((data) => {
                // console.log("Get login status cookies")
                // console.log(getCookies())
                // console.log("Data")
                // console.log(data)
                if (data.loggedIn) {
                    logIn(data.userId);
                }
                else {
                    logOut();
                }
            })

        // const userId = localStorage.getItem("userId")
        console.log(getCookie("user_info"))
        console.log(getCookies())
    }

    return {
        loggedIn,
        userId,
        logIn,
        logOut,
        getLoginStatus
    }
}

export default useAuth;

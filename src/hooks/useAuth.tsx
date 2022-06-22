import { useEffect, useState } from "react";
import { fetchLoginStatus } from "../api/auth";
import { getCookie, getCookies } from 'typescript-cookie';
import { AuthData } from "../models/AuthData";


function useAuth() {
    const [ loggedIn, setLoggedIn ] = useState(false)
    const [ userId, setUserId ] = useState<string>("")

    useEffect(() => {
        let cookie = getCookie("user_info")
        if(cookie !== undefined) {
            cookie = cookie.replace("UserSession(", "").replace(")", "")
            const cookieArr = cookie.split(",+")
            const cookieObj: AuthData = {
                loggedIn: Boolean(cookieArr[0].replace("loggedIn=", "")),
                userId: cookieArr[2].replace("userId=", ""),
                accessToken: cookieArr[1].replace("accessToken=", "")
            }
            if(cookieObj.loggedIn) {
                logIn(cookieObj.userId)
                console.log("Logged in")
            }
        }
        console.log("User state changed: userId " + userId, " loggedIn " + loggedIn)
    }, [loggedIn, userId]);

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

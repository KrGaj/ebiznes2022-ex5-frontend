import { useEffect, useState } from "react";
import { fetchLoginStatus } from "../api/auth";
import { getCookie, getCookies } from 'typescript-cookie';
import { AuthData } from "../models/AuthData";
import jwtDecode from "jwt-decode";
import {TokenData} from "../models/TokenData";


function useAuth() {
    const [ loggedIn, setLoggedIn ] = useState(false)
    const [ userId, setUserId ] = useState<string>("")

    useEffect(() => {
        let cookie = getCookie("user_info")
        if(cookie !== undefined) {
            cookie = cookie.replace("UserSession(", "").replace(")", "")
            const cookieArr = cookie.split(",+")
            const loggedIn = Boolean(cookieArr[0].replace("loggedIn=", ""))
            const accessToken = cookieArr[1].replace("accessToken=", "")

            const userInfo: TokenData = jwtDecode(accessToken)

            const cookieObj: AuthData = {
                loggedIn: loggedIn,
                userId: userInfo.userId,
                accessToken: accessToken,
                username: userInfo.username,
                email: userInfo.email
            }
            if(cookieObj.loggedIn) {
                logIn(cookieObj.userId)
                console.log("Id: " + cookieObj.userId)
                console.log("Username: " + cookieObj.username)
                console.log("Email: " + cookieObj.email)
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

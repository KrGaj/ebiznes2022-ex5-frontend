import { useEffect, useState } from "react";
import { fetchLoginStatus } from "../api/auth";
import { getCookie, getCookies } from 'typescript-cookie';
import { AuthData } from "../models/AuthData";
import jwtDecode from "jwt-decode";
import {TokenData} from "../models/TokenData";


function useAuth() {
    const defaultAuthData = {
        loggedIn: false,
        accessToken: "",
        userId: "",
        email: "",
        username: ""
    }

    const [ user, setUser ] = useState<AuthData>(defaultAuthData)

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
                logIn(cookieObj)
                console.log("Id: " + cookieObj.userId)
                console.log("Username: " + cookieObj.username)
                console.log("Email: " + cookieObj.email)
                console.log("Logged in")
            }
        }
        console.log("User state changed: userId " + user.userId, " loggedIn " + user.loggedIn)
    }, [user.userId, user.loggedIn]);

    function logIn(user: AuthData) {
        setUser(user)
    }

    function logOut() {
        setUser(defaultAuthData)
    }

    function getLoginStatus() {
        fetchLoginStatus("")
            .then((data) => {
                // console.log("Get login status cookies")
                // console.log(getCookies())
                // console.log("Data")
                // console.log(data)
                if (data.loggedIn) {
                    logIn(data);
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
        user,
        logIn,
        logOut,
        getLoginStatus
    }
}

export default useAuth;

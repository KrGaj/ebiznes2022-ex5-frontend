import {useEffect, useState} from "react";
import {fetchLoginStatusGoogle} from "../api/auth";

function useAuth() {
    const [ loggedIn, setLoggedIn ] = useState(false)
    const [ userId, setUserId ] = useState<string>("")

    useEffect(() => {
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
        fetchLoginStatusGoogle()
            .then((data) => {
                if (data.loggedIn) {
                    logIn(data.userId);
                }
                else {
                    logOut();
                }
            })
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

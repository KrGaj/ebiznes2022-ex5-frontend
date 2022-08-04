import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

export function HomeComponent() {
    const { user } = useContext(ShopContext)

    if(user.loggedIn) {
        return (
            <div>
                <h4>Witaj, {user.username}, rozgość się :)</h4>
            </div>
        )
    }
    else {
        return (
            <div>
                <h4>Witaj, zaloguj się, proszę :)</h4>
            </div>
        )
    }
}
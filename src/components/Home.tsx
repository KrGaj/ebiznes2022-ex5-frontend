import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

export function HomeComponent() {
    const { user } = useContext(ShopContext)
    const style = {color: 'white'}

    if(user.loggedIn) {
        return (
            <div>
                <h4 style={style}>Witaj, {user.username}, rozgość się :)</h4>
            </div>
        )
    }
    else {
        return (
            <div>
                <h4 style={style}>Witaj, zaloguj się, proszę :)</h4>
            </div>
        )
    }
}
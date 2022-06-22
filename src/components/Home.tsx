import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

export function HomeComponent() {
    const { loggedIn } = useContext(ShopContext)

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
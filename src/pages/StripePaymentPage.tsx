import { loadStripe } from "@stripe/stripe-js";
import {useContext, useEffect, useState} from "react";
import {ShopContext} from "../context/ShopContext";
import {Elements} from "@stripe/react-stripe-js";
import {getStripeSecret} from "../api/payments";
import {useParams} from "react-router-dom";
import {CheckoutForm} from "../components/CheckoutForm";

const stripePublicKey = "pk_test_51LWnwiHPJqQJBjX8iArLDFazWcqxEVnNvLHuWDQFuGMlsYNm9O3BIY23AU3wKlIwKUW376ZvJfTZtoULvswWF6Jb009Es3hIbi"
const stripePromise = loadStripe(stripePublicKey)

export const StripePaymentPage = () => {
    const { amount } = useParams()
    const { user } = useContext(ShopContext)
    const style = {color: 'white'}
    const [ options, setOptions ] = useState({
        clientSecret: ""
    })
    const [ isLoading, setIsLoading ] = useState(true)

    useEffect(() => {
        if(isLoading) {
            getStripeSecret(user.token, amount ? parseInt(amount) : 1)
                .then((data) => {
                    setOptions({
                        clientSecret: data.clientSecret
                    })
                    setIsLoading(false)
                })
        }
    }, [amount, isLoading, user.token])

    if(options.clientSecret === "") {
        return (
            <div>
                <h2 style={style}>Proszę czekać...</h2>
            </div>
        )
    }
    else {
        return (
            <div>
                <h2 style={style}>Zapłać za swoje zamówienie</h2>
                <Elements stripe={stripePromise} options={options}>
                    <CheckoutForm user={user}/>
                </Elements>
            </div>
        )
    }
}

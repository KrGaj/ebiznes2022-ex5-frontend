import { AuthData } from "../models/AuthData";
import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { FormEvent, useState } from "react";
import { addPurchase } from "../api/purchases";
import { Purchase } from "../models/Purchase";
import { Payment } from "../models/Payment";
import { addPayment } from "../api/payments";

export interface CheckoutFormProps {
    user: AuthData
}

export const CheckoutForm = (props: CheckoutFormProps) => {
    const { user } = props
    const stripe = useStripe()
    const elements = useElements()
    const [ errorMessage, setErrorMessage ] = useState<String>("");

    const samplePayment: Payment = {
        id: "",
        method: "card",
        date: Date.now(),
        paid: true,
        user: {
            id: user.userId
        }
    }

    const samplePurchase: Purchase = {
        user: {
            id: user.userId
        },
        cashSum: 21,
        payment: {
            id: ""
        }
    }

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault()

        if (!event || !elements) {
            console.log("Stripe error")

            return
        }

        const result = await stripe?.confirmPayment({
            elements,
            confirmParams: {
                return_url: "http://localhost:3000/order_finished"
            }
        })

        await addPayment(user.token, samplePayment)
            .then((data) => {
                samplePurchase.payment.id = data.paymentId
            })
        await addPurchase(user.token, samplePurchase)

        if (result?.error) {
            // This point will only be reached if there is an immediate error when
            // confirming the payment. Show error to your customer (for example, payment
            // details incomplete)
            setErrorMessage(result.error.message ? result.error.message : "error");
        } else {
            // Your customer will be redirected to your `return_url`. For some payment
            // methods like iDEAL, your customer will be redirected to an intermediate
            // site first to authorize the payment, then redirected to the `return_url`.
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <PaymentElement />
            <button disabled={!stripe}>Złóż zamówienie</button>
            { errorMessage && <div>{errorMessage}</div> }
        </form>
    )
}

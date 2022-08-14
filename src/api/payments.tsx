import { Payment } from "../models/Payment";
import axios from "../config/axios";
import { AuthData } from "../models/AuthData";
import {CheckoutResponseData} from "../models/CheckoutResponseData";
import {PaymentResponseData} from "../models/PaymentResponseData";

export const fetchPaymentsByUserId = async (user: AuthData): Promise<Payment[]> => {
    return axios(user.token).get("/payments/by_user?user_id=" + user.userId)
}

export const fetchAllPayments = async (token: string): Promise<Payment[]> => {
    return axios(token).get("/payments/all")
}

export const addPayment = async (token: string, payment: Payment): Promise<PaymentResponseData> => {
    return axios(token).post("/payments", payment)
}

export const getStripeSecret = async (token: string, amount: number) : Promise<CheckoutResponseData> => {
    return axios(token).get("/secret?amount=" + amount)
}

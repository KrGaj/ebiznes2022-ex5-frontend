import {Payment} from "../models/Payment";
import axios from "../config/axios";

export const fetchPaymentsByUserId = async (userId: number, token: string): Promise<Payment[]> => {
    return axios(token).get("/payments/by_user", {
        params: {
            user_id: userId
        }
    })
}

export const fetchAllPayments = async (token: string): Promise<Payment[]> => {
    return axios(token).get("/payments/all")
}

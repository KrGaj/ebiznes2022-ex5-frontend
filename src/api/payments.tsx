import { Payment } from "../models/Payment";
import axios from "../config/axios";
import { AuthData } from "../models/AuthData";

export const fetchPaymentsByUserId = async (user: AuthData): Promise<Payment[]> => {
    return axios(user.token).get("/payments/by_user?user_id=" + user.userId)
}

export const fetchAllPayments = async (token: string): Promise<Payment[]> => {
    return axios(token).get("/payments/all")
}

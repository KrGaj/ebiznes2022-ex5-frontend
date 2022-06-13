import {Payment} from "../models/Payment";
import axios from "../config/axios";

export const fetchPaymentsByUserId = async (userId: number): Promise<Payment[]> => {
    return await axios.get("/payments/by_user", {
        params: {
            user_id: userId
        }
    })
}

export const fetchAllPayments = async (): Promise<Payment[]> => {
    return await axios.get("/payments/all")
}

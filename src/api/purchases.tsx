import axios from "../config/axios";
import { Purchase } from "../models/Purchase";

export const addPurchase = async (token: string, purchase: Purchase) : Promise<Number> => {
    return axios(token).post("/purchases", purchase)
}
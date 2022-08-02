import { AuthData } from "../models/AuthData";
import axios from "../config/axios";

export const fetchLoginStatus = async (token: string): Promise<AuthData> => {
    return axios(token).get("/login/status")
}
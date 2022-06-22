import { AuthData } from "../models/AuthData";
import axios from "../config/axios";

export const fetchLoginStatus = async (): Promise<AuthData> => {
    return axios.get("/login/status")
}
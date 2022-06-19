import { AuthData } from "../models/AuthData";
import axios from "../config/axios";

export const fetchLoginStatusGoogle = async (): Promise<AuthData> => {
    return axios.get("/login/google/status")
}
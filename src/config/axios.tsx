import axiosFactory from "axios";
import {environment} from "./environment";

function axios(token: string) {
    const axios = axiosFactory.create({
        baseURL: environment.serverURL,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        }
    })

    axios.interceptors.response.use(response => response.data)

    return axios
}

export default axios;
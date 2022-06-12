import axiosFactory from "axios";
import {environment} from "./environment";

const axios = axiosFactory.create({
    baseURL: environment.serverURL,
    headers: {
        "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    }
})

axios.interceptors.response.use(response => response.data)

export default axios;
import axiosFactory from "axios";
import {environment} from "./environment";

function axios(token: string) {
    const axiosObj = axiosFactory.create({
        baseURL: environment.serverURL,
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        }
    })

    axiosObj.interceptors.response.use(response => response.data)

    return axiosObj
}

export default axios;
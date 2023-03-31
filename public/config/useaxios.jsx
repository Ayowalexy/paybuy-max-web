import axios, { AxiosResponse } from "axios";
import { getToken } from "./gettoken";

const useAxios = async function apiRequest(request){
    const token = getToken()
    const resp = await axios.request({
        ...request,
        headers: {
            ...request.headers,
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            mode: "cors",
        },
    });
    
    if (resp.status === 401) {
    }
    return resp;
};
export default useAxios;
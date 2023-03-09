import axios, { AxiosResponse } from "axios";
import { getToken } from ".";

const useAxios = async function apiRequest(request){
    const token = getToken()
    const resp = await axios.request({
        ...request,
        headers: {
            ...request.headers,
            authorization: `Bearer ${token}`,
            mode: "cors",
        },
    });
    
    if (resp.status === 401) {
    }
    return resp;
};
export default useAxios;
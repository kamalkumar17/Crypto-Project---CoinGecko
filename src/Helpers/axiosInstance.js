import axios from "axios";
import {COINGECKO_API_URL} from './Constants';
const axiosInstance=axios.create({
    BASEURL:COINGECKO_API_URL,
})
export default axiosInstance;
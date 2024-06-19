import axios from "axios";

const axiosTimeout = import.meta.env.VITE_APP_AXIOS_TIMEOUT

const AxiosClient = axios.create({
  baseURL: import.meta.env.VITE_APP_EMAILER_API_URL,
  headers: {
    "x-api-key": import.meta.env.VITE_APP_EMAILER_API_KEY,
  },
  timeout: axiosTimeout
    ? parseInt(axiosTimeout)
    : 30000,
});

export default AxiosClient;

import axios from "axios";

const baseEndpoint = `/api`; // ${baseDomain}
const { getToken } = require('../lib/storage');

const instance = axios.create({
    baseURL: baseEndpoint,
    headers: {
        "X-Requested-With": "XMLHttpRequest",
        Authorization: `Bearer ${getToken()}`
    }
});

instance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${getToken()}`;
    return config;
});

export default instance;


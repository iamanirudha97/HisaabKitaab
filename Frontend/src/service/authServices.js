import axios from 'axios'
import.meta.env.VITE_APP_API_URL

let host = `${import.meta.env.VITE_APP_API_URL|| ""}`
const userAxios = axios.create({baseURL:host});
console.log("host is ", host)
// Add a request interceptor
userAxios.interceptors.request.use(
    async config => {
        config.headers['Access-Control-Allow-Origin'] = "*";
        if(config.headers['Content-Type'] !== 'multipart/form-data')
            config.headers['Content-Type'] = 'application/json'
        return config;
    },
    error => {
        Promise.reject(error)
    }
);

export default userAxios;
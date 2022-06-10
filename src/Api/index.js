import axios from "axios";

const api = axios.create({
    baseURL: 'https://dev.data.api.hellomidou.com'
})

export default api
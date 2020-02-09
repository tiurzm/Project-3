import axios from "axios";

export default {
    login: (req) => {
        return axios.post("/api/v1/auth/login", req)
    },
    register: () => {
        return axios.post("/api/v1/auth/register")
    }
}
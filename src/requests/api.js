
const axios = require('axios');

const apiUrl = 'http://127.0.0.1:8000/api';


const authHeaders = (token) => {
    return {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
        }
    }
}


const api = () => {
    return {
        async getAccessToken(email, password) {
            const params = new URLSearchParams();
            params.append('username', email);
            params.append('password', password);
            return axios.post(`${apiUrl}/login/token`, params)
        },
        async getAllUsers(token) {
            return axios.get(`${apiUrl}/users/`, authHeaders(token))
        }
    }
}

export default api()
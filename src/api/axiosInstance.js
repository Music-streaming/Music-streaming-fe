import axios from "axios";

export const api = axios.create({
    baseURL : "https://rubi-convocative-acetometrically.ngrok-free.dev",
    headers:{
        "Content-Type": "application/json",
    },
});

export default api;


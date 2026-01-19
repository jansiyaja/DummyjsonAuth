import axios from "axios";

const API = axios.create({
  baseURL: "https://dummyjson.com",
  headers: {
    "Content-Type": "application/json",
  },
});

    export const login = async (credentials) => {
    try {
        const response = await API.post("/auth/login", credentials);
        return response.data;
    } catch (error) {
         throw new Error(
           error.response?.data?.message || "Authentication failed",
         );
    }
};
    


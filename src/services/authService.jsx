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
    
    
    localStorage.setItem("accessToken", response.data.accessToken);
    localStorage.setItem("refreshToken", response.data.refreshToken);

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Authentication failed");
  }
};

export const fetchUserProfile = async () => {
  const token = localStorage.getItem("accessToken");
  if (!token) throw new Error("No access token found");

  try {
    const response = await API.get("/auth/me", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch user profile");
  }
};



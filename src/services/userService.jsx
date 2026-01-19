import axios from "axios";

const API = axios.create({
  baseURL: "https://dummyjson.com",
  headers: {
    "Content-Type": "application/json",
  },
});


export const getUsers = async () => {
  try {
    const { data } = await API.get("/users");
    return data.users; 
  } catch (err) {
    throw new Error("Failed to fetch users");
  }
};

export const addUser = async (payload) => {
  try {
    const { data } = await API.post("/users/add", payload);
    return data; 
  } catch (err) {
    throw new Error("Failed to add user");
  }
};


export const updateUser = async (id, payload) => {
  try {
    const { data } = await API.put(`/users/${id}`, payload);
    return data;
  } catch (err) {
    throw new Error("Failed to update user");
  }
};


export const deleteUser = async (id) => {
  try {
    const { data } = await API.delete(`/users/${id}`);
    return data;
  } catch (err) {
    throw new Error("Failed to delete user");
  }
};

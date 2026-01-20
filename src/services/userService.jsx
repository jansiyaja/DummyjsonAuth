import axios from "axios";

const API = axios.create({
  baseURL: "https://dummyjson.com",
  headers: {
    "Content-Type": "application/json",
  },
});

/* ================= GET USERS ================= */
export const getUsers = async () => {
  try {
    const { data } = await API.get("/users");
    return data.users;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch users");
  }
};

/* ================= ADD USER ================= */
export const addUser = async (payload) => {
  try {
    const { data } = await API.post("/users/add", payload);
    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to add user");
  }
};

/* ================= UPDATE USER ================= */
export const updateUser = async (id, payload) => {
  try {
    const { data } = await API.put(`/users/${id}`, payload);
    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to update user");
  }
};

/* ================= DELETE USER ================= */
export const deleteUser = async (id) => {
  try {
    const { data } = await API.delete(`/users/${id}`);
    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to delete user");
  }
};

/* ================= SEARCH USERS ================= */
export const searchUsers = async (query) => {
  try {
    const { data } = await API.get(`/users/search?q=${query}`);
    return data.users;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to search users");
  }
};

/* ================= SORT USERS ================= */
export const sortUsers = async (sortBy, order = "asc") => {
  try {
    const { data } = await API.get(`/users?sortBy=${sortBy}&order=${order}`);
    return data.users;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to sort users");
  }
};

/* ================= PAGINATION / LIMIT ================= */
export const limitUsers = async (
  limit = 10,
  skip = 0,
  select = "firstName,lastName,email,age,gender,image",
) => {
  try {
    const { data } = await API.get(
      `/users?limit=${limit}&skip=${skip}&select=${select}`,
    );

    return {
      users: data.users,
      total: data.total,
    };
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to fetch limited users",
    );
  }
};

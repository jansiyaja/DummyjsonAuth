import axios from "axios";

const API = axios.create({
  baseURL: "https://dummyjson.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getProducts = async () => {
  try {
    const response = await API.get("/products");

    return response.data.products;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to fetch products",
    );
  }
};
export const deleteProduct = async (id) => {
  try {
    const response = await API.delete(`/products/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to delete product",
    );
  }
};

export const addProduct = async (payload) => {
  try {
    const response = await API.post("/products/add", payload);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to add product");
  }
};

export const updateProduct = async (id, payload) => {
  try {
    const { data } = await API.put(`/products/${id}`, payload);
    return data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to update product",
    );
  }
};

export const searchProducts = async (query) => {
  try {
    const response = await API.get(`/products/search?q=${query}`);
    return response.data.products;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to search products",
    );
  }
};
export const sortProducts = async (sortBy, order) => {
  try {
    const response = await API.get(`/products?sortBy=${sortBy}&order=${order}`);
    return response.data.products;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to sort products");
  }
};
export const limitProducts = async (limit = 10, skip = 0) => {
  try {
    const response = await API.get(
      `/products?limit=${limit}&skip=${skip}&select=title,price,brand,category,stock,thumbnail`,
    );
   
    return {
      products: response.data.products,
      total: response.data.total,
    };
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to fetch limited products",
    );
  }
};
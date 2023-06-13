import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const multipartInstance = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    Accept: "multipart/form-data",
    "Content-Type": "multipart/form-data",
  },
});

export const getAllProducts = async () => {
  const response = await instance.get("/api/product");
  return response;
};

export const getSingleProduct = async (id: any) => {
  const response = await instance.get(`/api/productDetail/${id}`);
  return response;
};

export const createProduct = async (data: any) => {
  const response = await multipartInstance.post("/api/product/store", data);
  return response;
};

export const getCategories = async () => {
  const response = await instance.get("/api/categories");
  return response;
};

export const createCategory = async (data: string) => {
  const response = await instance.post("/api/category/store", {
    category: data,
  });
  return response;
};

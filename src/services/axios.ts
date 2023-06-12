import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
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

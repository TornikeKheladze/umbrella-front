import React, { useEffect, useState } from "react";
import { Category, Product } from "../types/global";
import { getAllProducts, getCategories } from "../services/axios";
import { useLocation, useNavigate } from "react-router-dom";

const useProducts = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [productList, setProductList] = useState<Product[]>([]);
  const [filteredList, setFilteredList] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchProducts = () => {
    getAllProducts().then((res) => {
      const withCategoryAndKeys = res.data.map((product: Product) => {
        return {
          ...product,
          category: product.categories
            .map(({ category }) => category)
            .join(","),
          key: product.id,
        };
      });
      setProductList(withCategoryAndKeys);
    });
  };

  useEffect(() => {
    fetchProducts();
    getCategories().then((res) => setCategories(res.data));
  }, []);
  const [key, val] = location.search?.split("=");
  const paramKey = key?.split("?")[1];
  const paramValue = val?.split(",");

  const chooseCategoryHandler = (category: string) => {
    if (paramValue?.length > 0 && paramValue?.includes(category)) {
      const newValue = paramValue?.filter((cat) => cat != category);
      navigate(`${location.pathname}?${paramKey}=${newValue}`);
    } else if (paramValue?.length > 0) {
      navigate(`${location.pathname}?${paramKey}=${paramValue},${category}`);
    } else if (!paramValue) {
      navigate(`${location.pathname}?category=${category}`);
    }
  };
  useEffect(() => {
    if (paramValue?.length === 1 && paramValue[0]?.length === 0) {
      navigate(location.pathname);
    }
    const filtered = productList.filter((product) =>
      product.categories.find(({ category, id }) =>
        paramValue?.includes(category)
      )
    );

    setFilteredList(filtered);
  }, [location]);

  let list = paramValue ? filteredList : productList;

  return {
    list,
    navigate,
    paramValue,
    fetchProducts,
    categories,
    location,
    chooseCategoryHandler,
  };
};

export default useProducts;

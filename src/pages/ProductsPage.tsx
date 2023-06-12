import { useEffect, useState } from "react";
import { getAllProducts } from "../services/axios";
import { storeProducts } from "../store/ProductsSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductTable from "../components/ProductTable";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((store: any) => store.products);

  useEffect(() => {
    getAllProducts().then((res) => dispatch(storeProducts(res.data)));
  }, []);

  return <div>{products[0].name && <ProductTable list={products} />}</div>;
};

export default ProductsPage;

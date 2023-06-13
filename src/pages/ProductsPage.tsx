import { useEffect } from "react";
import { getAllProducts } from "../services/axios";
import { storeProducts } from "../store/ProductsSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductTable from "../components/ProductTable";
import { Link } from "react-router-dom";
import { Button } from "antd";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((store: any) => store.products);

  useEffect(() => {
    getAllProducts().then((res) => dispatch(storeProducts(res.data)));
  }, []);

  return (
    <div>
      <Button>
        <Link to={"/admin"}>Admin Panel</Link>
      </Button>
      {products[0].name && <ProductTable list={products} />}
    </div>
  );
};

export default ProductsPage;

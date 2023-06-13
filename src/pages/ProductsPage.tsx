import ProductTable from "../components/ProductTable";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  return (
    <div className="flex flex-col gap-4 mt-2">
      <Link
        className="self-center block w-32 h-8 border border-green-700 rounded-md text-center align-middle"
        to={"/admin/create-product"}
      >
        Admin panel
      </Link>
      <ProductTable />
    </div>
  );
};

export default ProductsPage;

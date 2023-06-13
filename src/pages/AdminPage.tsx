import { Button } from "antd";
import { Link, useLocation } from "react-router-dom";

import CreateProductForm from "../components/CreateProductForm";
import CreateCategory from "../components/CreateCategory";

const AddUserForm: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <>
      <header className="flex items-center justify-between m-6">
        <Button>
          <Link to={"/"}>Return Home</Link>
        </Button>
        <Button>
          <Link to={"/admin/create-product"}>Create Product</Link>
        </Button>
        <Button>
          <Link to={"/admin/create-category"}>Create Category</Link>
        </Button>
      </header>
      {pathname.includes("product") && <CreateProductForm />}
      {pathname.includes("category") && <CreateCategory />}
    </>
  );
};

export default AddUserForm;

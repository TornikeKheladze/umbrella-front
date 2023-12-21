import { Button } from "antd";
import { Link, useLocation } from "react-router-dom";

import CreateProductForm from "../components/CreateProductForm";
import CreateCategory from "../components/CreateCategory";

const AddUserForm: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <>
      <header className="flex bg-credo items-center justify-center gap-4 h-32">
        <h1 className="text-white font-extrabold text-4xl">CredoMerce</h1>
      </header>
      <header className="flex items-center justify-center gap-4 m-6">
        <Link
          className="block pr-2 pl-2 h-8 border border-green-700 rounded-md text-center align-middle"
          to={"/"}
        >
          Home
        </Link>
        <Link
          className={`${
            pathname.includes("category") && "bg-green-800"
          } block pr-2 pl-2 h-8 border border-green-700 rounded-md text-center align-middle`}
          to={"admin/create-category"}
        >
          Create Category
        </Link>
        <Link
          className={`${
            pathname.includes("product") && "bg-green-800"
          } block pr-2 pl-2 h-8 border border-green-700 rounded-md text-center align-middle`}
          to={"/admin/create-product"}
        >
          Create Product
        </Link>
      </header>
      {pathname.includes("product") && <CreateProductForm />}
      {pathname.includes("category") && <CreateCategory />}
    </>
  );
};

export default AddUserForm;

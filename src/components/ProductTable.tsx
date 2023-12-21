import { Button, Table } from "antd";
import { Product } from "../types/global";
import { Link } from "react-router-dom";
import { deleteProduct } from "../services/axios";
import useProducts from "../hooks/useProducts";

const ProductTable: React.FC = () => {
  const {
    list,
    fetchProducts,
    categories,
    paramValue,
    chooseCategoryHandler,
    navigate,
  } = useProducts();

  const columns = [
    {
      dataIndex: "image",
      key: "image",
      render: (text: string, record: Product) => {
        return (
          <img
            className="w-24"
            alt={record.name}
            src={record.images[0]?.image || ""}
          />
        );
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Description",
      key: "description",
      render: (text: string, record: Product) => {
        return (
          <p>
            {record.description.length > 29
              ? record.description.slice(0, 30) + "..."
              : record.description}
          </p>
        );
      },
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      key: "view",
      render: (text: string, record: Product) => {
        return (
          <Link
            className="block font-semibold pt-1 pr-2 pl-2 h-8 border border-green-700 rounded-md text-center"
            to={`/product/${record.id}`}
          >
            View Product
          </Link>
        );
      },
    },
    {
      key: "delete",
      render: (text: string, record: Product) => {
        return (
          <Button
            className="bg-red-600"
            type="primary"
            onClick={async () => {
              await deleteProduct(record.id);
              navigate("/");
              fetchProducts();
            }}
          >
            Delete
          </Button>
        );
      },
    },
  ];

  const categoryList = (
    <div className="flex gap-2 flex-wrap">
      {categories.length > 0 &&
        categories.map(({ category, id }) => (
          <p
            className={`${
              paramValue?.includes(category) && "bg-green-600"
            } border border-green-900 rounded-lg p-2 cursor-pointer`}
            key={category + id}
            onClick={() => chooseCategoryHandler(category)}
          >
            {category}
          </p>
        ))}
    </div>
  );
  console.log(list);

  return (
    <>
      {categoryList}
      {list.length > 0 ? (
        <Table columns={columns} dataSource={list} />
      ) : (
        <h1 className="font-bold text-3xl">No Products Yet</h1>
      )}
    </>
  );
};

export default ProductTable;

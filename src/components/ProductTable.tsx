import { Button, Table } from "antd";
import { Product, ProductTableProps } from "../types/global";
import { Link } from "react-router-dom";

const ProductTable: React.FC<ProductTableProps> = ({ list }) => {
  const columns = [
    {
      dataIndex: "image",
      key: "image",
      render: (text: string, record: Product) => {
        return (
          <img
            className="w-24"
            alt={record.name}
            src={record.images[0].image}
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
        return <p>{record.description.slice(0, 30)}...</p>;
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
          <Button>
            <Link to={`/product/${record.id}`}>View Product</Link>
          </Button>
        );
      },
    },
    {
      key: "delete",
      render: (text: string, record: Product) => {
        return (
          <Button
            className="delete"
            type="primary"
            onClick={() => {
              console.log("delete");
            }}
          >
            Delete
          </Button>
        );
      },
    },
  ];

  return <Table columns={columns} dataSource={list} />;
};

export default ProductTable;

import { Button, Table } from "antd";
import { Product, ProductTableProps } from "../types/global";
import { Link } from "react-router-dom";
import { deleteProduct, getAllProducts } from "../services/axios";
import { useEffect, useState } from "react";

const ProductTable: React.FC = () => {
  const [productList, setProductList] = useState<Product[]>([]);

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
  }, []);
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
              fetchProducts();
            }}
          >
            Delete
          </Button>
        );
      },
    },
  ];

  return productList.length > 0 ? (
    <Table columns={columns} dataSource={productList} />
  ) : (
    <h1 className="font-bold text-3xl">No Products Yet</h1>
  );
};

export default ProductTable;

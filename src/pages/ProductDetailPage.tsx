import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "antd";
import { useParams } from "react-router-dom";
import { Product } from "../types/global";
import { getSingleProduct } from "../services/axios";

const { Meta } = Card;

const ProductDetailPage = () => {
  const { id } = useParams();

  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    getSingleProduct(id).then((res) => setProduct(res.data[0]));
  }, []);

  return (
    <div>
      {product && (
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Card cover={<img alt="Product" src={product.images[0].image} />} />
          </Col>
          <Col span={12}>
            <Card>
              <Meta title={product.name} description={product.description} />
              <p>price: ${product.price}</p>
              <p>category: {product.category}</p>
            </Card>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default ProductDetailPage;

import React, { useEffect, useState } from "react";
import { Card, Row, Col, List } from "antd";
import { useParams } from "react-router-dom";
import { Product } from "../types/global";
import { getSingleProduct } from "../services/axios";

const { Meta } = Card;

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>();
  const [displayedImage, setDisplayedImage] = useState<string | undefined>("");

  useEffect(() => {
    getSingleProduct(id).then((res) => setProduct(res.data[0]));
    setDisplayedImage(product?.images[0].image);
  }, []);

  console.log(product);
  return (
    <div>
      {product && (
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <List
              grid={{
                gutter: 16,
                column: 1,
              }}
              dataSource={product.images}
              renderItem={(item) => (
                <List.Item>
                  <Card>
                    <img
                      src={item.image}
                      alt={item.image}
                      style={{ maxWidth: "100%" }}
                    />
                  </Card>
                </List.Item>
              )}
            />
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

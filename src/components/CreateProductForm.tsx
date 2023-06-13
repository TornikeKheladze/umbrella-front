import { PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, InputNumber, Select, Upload } from "antd";
import { createProduct, getCategories } from "../services/axios";
import { useEffect, useState } from "react";
import { Category } from "../types/global";
import { useNavigate } from "react-router-dom";

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const CreateProductForm = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    getCategories().then((res) => setCategories(res.data));
  }, []);

  const navigate = useNavigate();

  const onFinish = async (values: FormData) => {
    await createProduct(values);
    navigate("/");
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="name"
        name="name"
        rules={[{ required: true, message: "Please input product name!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Choose category"
        name="category"
        rules={[{ required: true, message: "Please input product name!" }]}
      >
        <Select mode="tags" style={{ width: "100%" }} placeholder="category">
          {categories.length > 0 &&
            categories.map(({ category, id }) => (
              <Select.Option key={id} value={String(id)}>
                {category}
              </Select.Option>
            ))}
        </Select>
      </Form.Item>

      <Form.Item
        label="description"
        name="description"
        rules={[
          { required: true, message: "Please input product description!" },
        ]}
      >
        <Input.TextArea rows={4} />
      </Form.Item>

      <Form.Item
        label="price"
        name="price"
        rules={[{ required: true, message: "Please input product price!" }]}
      >
        <InputNumber />
      </Form.Item>

      <Form.Item
        label="Image"
        valuePropName="fileList"
        name="image"
        getValueFromEvent={normFile}
        rules={[{ required: true, message: "Please add product image!" }]}
      >
        <Upload
          beforeUpload={(e) => {
            return false;
          }}
          listType="picture-card"
        >
          <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Add Image</div>
          </div>
        </Upload>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateProductForm;

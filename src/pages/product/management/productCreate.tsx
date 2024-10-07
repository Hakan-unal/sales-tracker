import React from "react";
import type { FormProps } from "antd";
import { Button, Col, Form, Input, Row } from "antd";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const { TextArea } = Input;


type FieldType = {
  productName: string;
  quantity: string;
  contact: string;
  taxNo: string;
  year: string;
  address: string;
  note:string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const ProductCreate: React.FC = () => {
  return (
    <Row gutter={[12, 36]}>
      <Col span={6}>
        <Link to="/product" type="primary">
          <FaArrowCircleLeft className="cursorPointer" size={35} />
        </Link>
      </Col>
      <Col span={24}>
        <Form
          labelAlign="left"
          name="basic"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Row>

            {/**
             * 
             * Form Left side
             */}
            <Col span={12}>
              <Form.Item<FieldType>
                label="Ürün Adı"
                name="productName"
                rules={[
                  {
                    required: true,
                    message: "Please input your customerName!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item<FieldType>
                label="Adet"
                name="quantity"
                rules={[
                  { required: true, message: "Please input your country!" },
                ]}
              >
                <Input />
              </Form.Item>

            
              <Form.Item<FieldType>
                label="Not"
                name="note"
                rules={[
                  { required: true, message: "Please input your contact!" },
                ]}
              >
                    <TextArea rows={4} placeholder="maxLength is 6" maxLength={6} />

              </Form.Item>
            </Col>

             {/**
             * 
             * Form Right side
             */}
            <Col span={12}>
              <Form.Item<FieldType>
                label="Maliyet"
                name="taxNo"
                rules={[
                  { required: true, message: "Please input your taxNo!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item<FieldType>
                label="Üretim Yılı"
                name="year"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input />
              </Form.Item>
              
            </Col>
          </Row>

          <Form.Item wrapperCol={{ offset: 19, span: 4 }}>
            <Button block type="primary" htmlType="submit">
              Kaydet
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default ProductCreate;

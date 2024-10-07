import React from "react";
import type { FormProps } from "antd";
import { Button, Col, Form, Input, Row } from "antd";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

type FieldType = {
  customerName: string;
  country: string;
  contact: string;
  taxNo: string;
  email: string;
  address: string;
  note:string;
};

const { TextArea } = Input;


const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const CustomerCreate: React.FC = () => {
  return (
    <Row gutter={[12, 36]}>
      <Col span={6}>
        <Link to="/customer/management" type="primary">
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
                label="Müşteri Adı "
                name="customerName"
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
                label="Şehir"
                name="country"
                rules={[
                  { required: true, message: "Please input your country!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item<FieldType>
                label="İletişim"
                name="contact"
                rules={[
                  { required: true, message: "Please input your contact!" },
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
                label="Vergi No"
                name="taxNo"
                rules={[
                  { required: true, message: "Please input your taxNo!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item<FieldType>
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item<FieldType>
                label="Adres"
                name="address"
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

export default CustomerCreate;

import React from "react";
import type { FormProps } from "antd";
import { Button, Col, Form, Input, Row, Select, Upload, message } from "antd";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineDriveFolderUpload } from "react-icons/md";
import type { UploadProps } from "antd";

const { TextArea } = Input;

const props: UploadProps = {
  name: "file",
  action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  progress: {
    strokeColor: {
      "0%": "#108ee9",
      "100%": "#87d068",
    },
    strokeWidth: 3,
    format: (percent) => percent && `${parseFloat(percent.toFixed(2))}%`,
  },
};

type FieldType = {
  productName: string;
  quantity: string;
  contact: string;
  taxNo: string;
  salesPrice: string;
  salesYear: string;
  address: string;
  note: string;
  bill:string;
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
        <Link to="/sales" type="primary">
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
                label="Müşteri"
                name="productName"
                rules={[
                  {
                    required: true,
                    message: "Please input your customerName!",
                  },
                ]}
              >
                <Select
                  allowClear
                  options={[
                    { value: "1", label: "A Müşterisi" },
                    { value: "2", label: "B Müşterisi" },
                  ]}
                />
              </Form.Item>

              <Form.Item<FieldType>
                label="Satış Yılı"
                name="salesYear"
                rules={[
                  { required: true, message: "Please input your email!" },
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
                label="Ürün"
                name="taxNo"
                rules={[
                  { required: true, message: "Please input your taxNo!" },
                ]}
              >
                <Select
                  allowClear
                  options={[
                    { value: "1", label: "Kablo" },
                    { value: "2", label: "Palet" },
                  ]}
                />
              </Form.Item>

              

              <Form.Item<FieldType>
                label="Satış Fiyatı"
                name="salesPrice"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item<FieldType>
                label="Fatura"
                name="bill"
                rules={[
                  { required: true, message: "Please input your bill!" },
                ]}
              >
                <Upload {...props}>
                  <Button icon={<MdOutlineDriveFolderUpload />}>
                    Click to Upload
                  </Button>
                </Upload>
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

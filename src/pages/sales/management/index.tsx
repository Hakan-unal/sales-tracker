import { Button, Col, Row, Space, Table, Tooltip } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { FiTrash2 } from "react-icons/fi";
import { BsPencil } from "react-icons/bs";
import { Link } from "react-router-dom";
import { MdPayments } from "react-icons/md";

const Sample = (props: any) => {
  interface DataType {
    key: React.Key;
    id: number;
    customerName: string;
    productName: string;
    quantity: string;
    year: string;
    price: string;
  }

  const columns: TableColumnsType<DataType> = [
    {
      title: "#",
      dataIndex: "id",
    },
    {
      title: "Müşteri Adı",
      dataIndex: "customerName",
    },
    {
      title: "Ürün Adı",
      dataIndex: "productName",
    },
    {
      title: "Adet/Kilo",
      dataIndex: "quantity",
    },
    {
      title: "Satış Yılı",
      dataIndex: "year",
    },
    {
      title: "Satış Fiyatı",
      dataIndex: "price",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Tooltip title="Düzenle" color={"blue"}>
            <BsPencil className="cursorPointer" size={16} color="blue" />
          </Tooltip>

          <Tooltip title="Sil" color={"red"}>
            <FiTrash2 className="cursorPointer" size={16} color="red" />
          </Tooltip>

          <Tooltip title="Ödeme Ekle" color={"orange"}>
            <MdPayments className="cursorPointer" size={16} color="orange" />
          </Tooltip>
        </Space>
      ),
    },
  ];
  const data: DataType[] = [
    {
      key: "1",
      id: 5,
      customerName: "A Müşterisi",
      productName: "Kablo",
      quantity: "10",
      year: "2024",
      price: "2000.00",
    },
    {
      key: "1",
      id: 3,
      customerName: "A Müşterisi",
      productName: "Palet",
      quantity: "100",
      year: "2024",
      price: "5000.00",
    },
    {
      key: "1",
      id: 8,
      customerName: "A Müşterisi",
      productName: "Kable",
      quantity: "10",
      year: "2024",
      price: "6000.00",
    },
  ];

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <Row gutter={[12, 36]}>
      <Col offset={18} span={4}>
        <Link to="/sales/create" type="primary">
          <Button block>Create New</Button>
        </Link>
      </Col>

      <Col offset={2} span={20}>
        <Table<DataType>
          columns={columns}
          dataSource={data}
          onChange={onChange}
        />
      </Col>
    </Row>
  );
};

export default Sample;

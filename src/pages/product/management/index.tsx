import { Button, Col, Row, Space, Table, Tooltip } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { FiTrash2 } from "react-icons/fi";
import { BsPencil } from "react-icons/bs";
import { Link } from "react-router-dom";

const Sample = (props: any) => {
  interface DataType {
    key: React.Key;
    id: number;
    name: string;
    quantity: string;
    year: string;
  }

  const columns: TableColumnsType<DataType> = [
    {
      title: "#",
      dataIndex: "id",
    },
    {
      title: "Ürün Adı",
      dataIndex: "name",
    },

    {
      title: "Adet/Kilo",
      dataIndex: "quantity",
    },
    {
      title: "Üretim Yılı",
      dataIndex: "year",
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
        </Space>
      ),
    },
  ];
  const data: DataType[] = [
    {
      key: "1",
      id: 5,
      name: "Kablo",
      quantity: "10",
      year: "2024",
    },
    {
      key: "2",
      id: 2,
      name: "B müşterisi",
      quantity: "İstanbul",
      year: "2023",
    },
    {
      key: "3",
      id: 8,
      name: "C müşterisi",
      quantity: "İstanbul",
      year: "2022",
    },
    {
      key: "4",
      id: 11,
      name: "D müşterisi",
      quantity: "Ankara",
      year: "2024",
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
        <Link to="/product/create" type="primary">
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

import { Card, Form, Checkbox, Input, Button, Row, Col } from "antd";
import useLocalStorage from "../../hooks/useLocalStorage";
import testData from "../../staticData/user.json";
import { showNotification } from "../../components/general/notification";
import { navigator } from "../../components/general/navigator";
import { useNavigate } from "react-router-dom";

const Login = (props: any) => {
  const [user, setUser] = useLocalStorage<any>("user", {});
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    setUser(testData);

    showNotification(
      "success",
      "Başarılı",
      "Login oldunuz hoşgeldin: " + values.username,
      null
    );
    navigator(navigate, "/");
  };

  const onFinishFailed = (errorInfo: any) => {
    showNotification(
      "error",
      "Başarısız",
      "Login sürecinde hatayla karşılaşıldı",
      null
    );
  };
  return (
    <Row>
      <Col span={16} md={{ span: 12, offset: 6 }}>
        <Card hoverable>
          <Form
            className="mt-20"
            name="basic"
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14, offset: 6 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input allowClear />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password allowClear />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{ offset: 10, span: 8 }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 10, span: 18 }}>
              <Button className="button-radius" block type="primary" htmlType="submit">
                Login
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;

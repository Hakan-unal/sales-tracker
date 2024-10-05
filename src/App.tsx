
import { Layout, theme } from "antd"
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/home/home"
import Login from "./pages/login/login"
import Budget from "./pages/customer/budget"
import Management from "./pages/customer/management"
import Customer from "./pages/customer"

import page404 from "./pages/404/404"
import Sidebar from './components/layout/sidebar';
import useLocalStorage from "./hooks/useLocalStorage"
import { useEffect } from "react";
import { navigator } from "./components/general/navigator";
import { useNavigate } from "react-router-dom";

const { Content } = Layout;

const App: React.FC = () => {
  const [user, setUser] = useLocalStorage<any>("user", {})
  const navigate = useNavigate();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(() => {
    if (!user.accessToken) navigator(navigate, "/login")
  }, [user])


  return (<Layout >
    {user.accessToken && <Sidebar />}
    <Layout>
      {
        // optional header
        // <Header></Header>
      }
      <Content
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 400,
          background: colorBgContainer,
        }}
      >
        <Routes>
          <Route path="/" Component={Home}></Route> 
          <Route path="/login" Component={Login}></Route>
          <Route path="/customer/budget" Component={Budget}></Route>
          <Route path="/customer/management" Component={Management}></Route>
          <Route path="/customer" Component={Customer}></Route>
          <Route path="*" Component={page404}></Route> 
        </Routes>
      </Content>
      {
        // optional header
        // <Footer><Footer />
      }


    </Layout>

  </Layout>

  )
}


export default App;

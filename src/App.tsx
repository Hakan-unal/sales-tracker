
import { Layout, theme } from "antd"
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/home/home"
import Login from "./pages/login/login"
import Customer from "./pages/customer/management"
import CustomerCreate from "./pages/customer/management/customerCreate"
import Product from "./pages/product/management"
import ProductCreate from "./pages/product/management/productCreate"

import Sales from "./pages/sales/management"
import SalesCreate from "./pages/sales/management/salesCreate"


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
    <Sidebar />
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
          <Route path="/customer" Component={Customer}></Route>
          <Route path="/customer/create" Component={CustomerCreate}></Route>
          <Route path="/product" Component={Product}></Route>
          <Route path="/product/create" Component={ProductCreate}></Route>
          <Route path="/sales" Component={Sales}></Route>
          <Route path="/sales/create" Component={SalesCreate}></Route>


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

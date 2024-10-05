
import { Layout, Menu, theme } from "antd"
import { Route, Routes, useParams, useLocation } from 'react-router-dom';
import Home from "./pages/home/home"
import Login from "./pages/login/login"
import page404 from "./pages/404/404"
import Sidebar from './components/layout/sidebar';
import useLocalStorage from "./hooks/useLocalStorage"
import { useEffect } from "react";
import { navigator } from "./components/general/navigator";
import { useNavigate, Navigate } from "react-router-dom";
import { showNotification } from "./components/general/notification";

const { Content } = Layout;

const App: React.FC = () => {
  const deneme = useLocation()
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
          {/* <Route path="/" Component={Home}></Route> */}
          <Route path="/login" Component={Login}></Route>

          /* <Route path="*" Component={Home}></Route> */
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

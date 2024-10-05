
import { useState } from 'react';
import { Button, MenuProps, MenuTheme } from 'antd';
import { AiOutlineHome } from "react-icons/ai";
import { showNotification } from "../../components/general/notification";
import { navigator } from "../../components/general/navigator";
import { useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd"
import { Link } from 'react-router-dom';
import useLocalStorage from "../../hooks/useLocalStorage"

const { Sider } = Layout;
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const Sidebar: React.FC = (...props) => {
  const [collapsed, setCollapsed] = useState(true);
  const [mode, setMode] = useState<MenuTheme>('light');
  const [current, setCurrent] = useState('home');
  const navigate = useNavigate();
  const [user, setUser] = useLocalStorage<any>("user", {})

  const handleLogout = () => {
    //api call
    setUser({})

    navigator(navigate, "/login")
    showNotification("success", "Başarılı", "Logout oldunuz ", null)
  }

  const items: MenuItem[] = [
    getItem(<Link to="/">Anasayfa</Link>, 'home', <AiOutlineHome />),

    getItem('Müşteri', 'customer', <AiOutlineHome />, [
      getItem(<Link to="/customer/management">Yönetim</Link>, 'customer management', <AiOutlineHome />),
      getItem(<Link to="/customer/budget">Cari</Link>, 'budget', <AiOutlineHome />),
      getItem(<Link to="/customer">Customer</Link>, 'customer', <AiOutlineHome />),

    ]),
    getItem('Örnek ürün A', 'sample', <AiOutlineHome />, [
      getItem(<Link to="/sample">Ürün</Link>, 'product', <AiOutlineHome />),
      getItem(<Link to="/sample">Satış</Link>, 'product sale', <AiOutlineHome />),
      getItem(<Link to="/sample">Stok</Link>, 'product stock', <AiOutlineHome />),
    ]),

    getItem(<Button onClick={() => handleLogout()}>Çıkış Yap</Button>, 'logout', <AiOutlineHome />),

  ];
 

  const handleMenu: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };
  return (
    <Sider theme={mode} trigger={null} collapsible collapsed={collapsed}>
      <Menu
        onMouseEnter={() => setCollapsed(false)}
        onMouseLeave={() => setCollapsed(true)}
        selectedKeys={[current]}
        onClick={handleMenu}
        theme={mode}
        mode="inline"
        items={items}
      />
    </Sider>
  )
}


export default Sidebar;
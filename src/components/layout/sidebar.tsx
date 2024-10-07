import { useState } from "react";
import { MenuProps, MenuTheme } from "antd";
import { showNotification } from "../../components/general/notification";
import { navigator } from "../../components/general/navigator";
import { useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useLocation } from "react-router-dom";
import { AiOutlineLogout,AiOutlineHome } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { MdOutlineManageAccounts } from "react-icons/md";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { PiFactoryBold } from "react-icons/pi";

const { Sider } = Layout;
type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
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
  const [mode, setMode] = useState<MenuTheme>("light");
  const [current, setCurrent] = useState("home");
  const navigate = useNavigate();
  const [user, setUser] = useLocalStorage<any>("user", {});
  const location = useLocation();

  const handleLogout = () => {
    setUser({});

    navigator(navigate, "/login");
    showNotification("success", "Başarılı", "Logout oldunuz ", null);
  };

  const items: MenuItem[] = [
    getItem(<Link to="/">Anasayfa</Link>, "home", <AiOutlineHome size={20} />),

    getItem("Müşteri", "customer", <FaUsers size={20} />, [
      getItem(
        <Link to="/customer">Yönetim</Link>,
        "customerManagement",
        <MdOutlineManageAccounts size={20} />
      ),
    ]),
    getItem("Ürün", "product", <PiFactoryBold size={20} />, [
      getItem(<Link to="/product">Yönetim</Link>, "productManagement", <MdOutlineManageAccounts size={20} />),
     
    ]),
    getItem("Satış", "sales", <FaMoneyCheckDollar />, [
      getItem(<Link to="/sales">Yönetim</Link>, "productSales", <MdOutlineManageAccounts size={20} />),
    ]),

   
  ];

  const handleMenu: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  if (["/login"].includes(location.pathname)) {
    return null;
  }

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
      <AiOutlineLogout
        className="cursorPointer ml-20"
        size={25}
        onClick={() => handleLogout()}
      />{" "}
      ,
    </Sider>
  );
};

export default Sidebar;

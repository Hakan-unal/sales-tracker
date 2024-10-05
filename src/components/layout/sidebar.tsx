
import { useState } from 'react';
import { Button, Divider, MenuProps, MenuTheme, Space, } from 'antd';
import { AiOutlineHome, AiOutlineInsertRowBelow, AiTwotoneBuild, AiOutlineFilePdf } from "react-icons/ai";
import { TbBrandVercel } from "react-icons/tb";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import { showNotification } from "../../components/general/notification";
import { navigator } from "../../components/general/navigator";
import { useNavigate, Navigate } from "react-router-dom";
import { Layout, Menu, Switch } from "antd"
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
    getItem(<Link to="/login">Anasayfa</Link>, 'home', <AiOutlineHome />),
    // {
    //   type: 'divider',
    // },
    getItem('Performans', 'sub1', <AiOutlineHome />, [
      getItem('Personel', '1', <AiOutlineHome />),
      getItem('Değerlendirme', '2', <AiOutlineHome />),
      getItem('Tanımlama', '3', <AiOutlineHome />),
    ]),
    getItem('Personel', 'sub2', <AiOutlineHome />, [
      getItem('Kadro', '4', <AiOutlineHome />),
      getItem('Hiyerarşi', '5', <AiOutlineHome />),
      getItem('Tanımlama', '6', <AiOutlineHome />),
    ]),

    getItem('Chat', 'sub3', <AiOutlineHome />, [
      getItem('Genel', '7', <AiOutlineHome />),
      getItem('Grup', '8', <AiOutlineHome />),
      getItem('Özel', '9', <AiOutlineHome />),
      getItem('Tanımlama', '10', <AiOutlineHome />),
    ]),

    getItem('Eğitim', 'sub4', <AiOutlineHome />, [
      getItem('Personel', '11', <AiOutlineHome />),
      getItem('Değerlendirme', '12', <AiOutlineHome />),
      getItem('Tanımlama', '13', <AiOutlineHome />),
    ]),

    getItem('Sertifika', 'sub5', <AiOutlineHome />, [
      getItem('Personel', '14', <AiOutlineHome />),
      getItem('Değerlendirme', '15', <AiOutlineHome />),
      getItem('Tanımlama', '16', <AiOutlineHome />),
    ]),

    getItem('IK', 'sub6', <AiOutlineHome />, [
      getItem('Personel', '17', <AiOutlineHome />),
      getItem('Belge', '18', <AiOutlineHome />),
      getItem('İzin', '19', <AiOutlineHome />),
      getItem('İşe Alım', '20', <AiOutlineHome />),
      getItem('İşten Çıkış', '21', <AiOutlineHome />),
      getItem('Eğitim', '22', <AiOutlineHome />),
      getItem('Bordro Özlük', '23', <AiOutlineHome />),
      getItem('Tanımlama', '24', <AiOutlineHome />),
    ]),

    getItem('İletişim', 'sub7', <AiOutlineHome />, [
      getItem('Anket', '25', <AiOutlineHome />),
      getItem('Quiz', '26', <AiOutlineHome />),
      getItem('Görsel', '27', <AiOutlineHome />),
      getItem('LCV', '28', <AiOutlineHome />),
      getItem('Tanımlama', '29', <AiOutlineHome />),
    ]),

    getItem('Yetkili', 'sub8', <AiOutlineHome />, [
      getItem('İstatistik', '30', <AiOutlineHome />),
      getItem('Tanımlama', '31', <AiOutlineHome />),
    ]),

    getItem(<Button onClick={() => handleLogout()}>Çıkış Yap</Button>, 'logout', <AiOutlineHome />),

  ];
  const changeMode = (value: boolean) => {
    setMode(value ? 'dark' : 'light');
  };

  const handleMenu: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };
  return (
    <Sider theme={mode} trigger={null} collapsible collapsed={collapsed}>
      <Switch
        checked={mode === 'dark'}
        onChange={changeMode}
        checkedChildren="Dark"
        unCheckedChildren="Light"
        style={{ marginBottom: 10 }}
      />

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
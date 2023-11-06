import React, { useState } from 'react';
import {
  AppstoreOutlined,
//   MailOutlined,
//   LinkOutlined,
//   SettingOutlined,
} from '@ant-design/icons';
import { Divider, Menu, Switch } from 'antd';
import type { MenuProps, MenuTheme } from 'antd/es/menu';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
 
    getItem('GIAO HÀNG', 'sub1', <AppstoreOutlined />, [
        // Hiển thị danh sách các đơn hàng đã được đặt hoặc đang trong quá trình giao hàng.
        getItem('Danh sách Đơn hàng','1'),
        //  Hiển thị trạng thái của từng đơn hàng (đã đặt hàng, đang xử lý, đang giao hàng, đã giao hàng).
        getItem('Trạng thái Đơn hàng','2'),
        // Hiển thị thông tin chi tiết về từng đơn hàng, bao gồm danh sách sản phẩm, địa chỉ giao hàng, thông tin thanh toán và các chi tiết khác.
        getItem('Thông tin Chi tiết Đơn hàng', '3'),
        // Hiển thị bản đồ với địa điểm giao hàng được đánh dấu trên đó, giúp người dùng theo dõi việc vận chuyển hàng hóa.
        getItem('Bản đồ Địa điểm', '4'),
        // Hiển thị thông tin về thời gian dự kiến giao hàng hoặc lịch trình giao hàng (nếu có).
        getItem('Thời gian Dự kiến giao hàng', '5'),
        // Hiển thị thông báo về các thay đổi trạng thái đơn hàng, thông tin vận chuyển hoặc thông tin liên quan đến đơn hàng.
        getItem('Thông báo liên quan đến Đơn hàng', '6'),
        // Cho phép người dùng thay đổi thông tin liên quan đến việc giao hàng, ví dụ: thay đổi địa chỉ giao hàng, thời gian giao hàng hoặc phương thức vận chuyển.
        getItem('Các tùy chọn Giao hàng', '7'),
        // Cho phép người dùng hủy đơn hàng (nếu có).
        getItem('Hủy đơn hàng', '8'),
    ])
];

const App: React.FC = () => {
  const [mode, setMode] = useState<'vertical' | 'inline'>('inline');
  const [theme, setTheme] = useState<MenuTheme>('light');

  const changeMode = (value: boolean) => {
    setMode(value ? 'vertical' : 'inline');
  };

  const changeTheme = (value: boolean) => {
    setTheme(value ? 'dark' : 'light');
  };

  return (
    <>
      <Switch onChange={changeMode} /> Change Mode
      <Divider type="vertical" />
      <Switch onChange={changeTheme} /> Change Style
      <br />
      <br />
      <Menu
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode={mode}
        theme={theme}
        items={items}
      />
    </>
  );
};

export default App;

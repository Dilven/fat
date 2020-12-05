import React from 'react';
import { NavLink, useLocation } from "react-router-dom";
import { paths } from '../../config/paths';
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import styles from './Navigation.module.css';

const { Sider } = Layout;

export const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <Layout>
      <Sider
        className={styles.sider}
      >
      <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[pathname]}>
          <Menu.Item key={paths.home} icon={<UserOutlined />}>
            <NavLink to={paths.home}>Home</NavLink>
          </Menu.Item>
          <Menu.Item key={paths.recipts} icon={<VideoCameraOutlined />}>
            <NavLink to={paths.recipts}>Search movies</NavLink>
          </Menu.Item>
          <Menu.Item key={paths.meals} icon={<UploadOutlined />}>
            <NavLink to={paths.meals}>Search series</NavLink>
          </Menu.Item>
        </Menu>
      </Sider>
    </Layout>
  )
}
import { Menu as AntMenu } from "antd";
import React from 'react'
import { NavLink } from "react-router-dom";
import { OrderedListOutlined, TeamOutlined } from '@ant-design/icons';
import styles from './styles.module.css';

const { Item } = AntMenu;

export const Menu = () => {
  return (
    <AntMenu className={styles.menu}>
      <Item icon={<TeamOutlined />}>
        <NavLink to="/people">People</NavLink>
      </Item>
      <Item icon={<OrderedListOutlined />}>
        <NavLink to="/todo">ToDo</NavLink>
      </Item>
    </AntMenu>
  );
};

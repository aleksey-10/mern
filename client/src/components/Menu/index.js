import { Menu as AntMenu } from "antd";
import React, { useContext } from 'react'
import { NavLink } from "react-router-dom";
import { OrderedListOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import styles from './styles.module.css';
import { AuthContext } from "../../context/AuthContext";

const { Item } = AntMenu;

export const Menu = () => {
  const { username } = useContext(AuthContext);

  return (
    <AntMenu className={styles.menu}>
      <Item icon={<UserOutlined />}>
        <NavLink to={`/people/${username}`}>My Profile</NavLink>
      </Item>
      <Item icon={<TeamOutlined />}>
        <NavLink to="/people">People</NavLink>
      </Item>
      <Item icon={<OrderedListOutlined />}>
        <NavLink to="/todo">ToDo</NavLink>
      </Item>
    </AntMenu>
  );
};

import { Layout } from 'antd';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Login } from '../Login';
import { Menu } from '../Menu';
import { People } from '../People';
import { Profile } from '../Profile';
import { Register } from '../Register';
import { ToDo } from '../ToDo';

export const Pages = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    return (
      <Layout>
        <Layout.Content>
          <Switch>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/register" exact>
              <Register />
            </Route>
            <Redirect to="/login" />
          </Switch>
        </Layout.Content>
      </Layout>
    );
  }

  return (
    <Layout>
      <Layout.Sider>
        <Menu />
      </Layout.Sider>
      <Layout.Content className="container">
        <Switch>
          <Route path="/people/:username">
            <Profile />
          </Route>
          <Route path="/people" exact>
            <People />
          </Route>
          <Route path="/todo" exact>
            <ToDo />
          </Route>
          <Redirect to="/people" />
        </Switch>
      </Layout.Content>
    </Layout>
  );
};

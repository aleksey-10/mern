import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Login } from '../Login';
import { Register } from '../Register';
import { ToDo } from '../ToDo';

export const Content = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    return (
      <div>
        <Switch>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
          <Redirect to="/login" />
        </Switch>
      </div>
    );
  }

  return (
    <div>
      <Switch>
        <Route path="/details" exact>
          <h1>DETAILS</h1>
        </Route>
        <Route path="/todo" exact>
          <ToDo />
        </Route>
        <Redirect to="/todo" />
      </Switch>
    </div>
  );
};

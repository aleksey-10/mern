import React from 'react';
import { Pages } from './components/Pages';
import 'antd/dist/antd.css';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { useAuth } from './hooks/auth.hooks';
import { AuthContext } from './context/AuthContext';
import { Header } from './components/Header';
import { Layout } from 'antd';

function App() {
  const { login, logout, token, userId } = useAuth();
  const isAuthenticated = !!token;

  return (
    <div className="App">
      <Router>
        <AuthContext.Provider value={{ login, logout, token, userId }}>
          <Header isAuthenticated={isAuthenticated} logout={logout} />
          <div className="content">
            <Pages isAuthenticated={isAuthenticated} />
          </div>
          <Layout.Footer>MERN</Layout.Footer>
        </AuthContext.Provider>
      </Router>
    </div>
  );
}

export default App;

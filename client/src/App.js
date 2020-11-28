import React from 'react';
import { Content } from './components/Content';
import 'antd/dist/antd.css';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { useAuth } from './hooks/auth.hooks';
import { AuthContext } from './context/AuthContext';
import { Header } from './components/Header';

function App() {
  const { login, logout, token, userId } = useAuth();
  const isAuthenticated = !!token;

  return (
    <div className="App">
      <Router>
        <AuthContext.Provider value={{ login, logout, token, userId }}>
          <div className="header">
            <Header isAuthenticated={isAuthenticated} logout={logout} />
          </div>
          <div className="container">
            <Content isAuthenticated={isAuthenticated} />
          </div>
        </AuthContext.Provider>
      </Router>
    </div>
  );
}

export default App;

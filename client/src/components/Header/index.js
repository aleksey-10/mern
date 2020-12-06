import { Button, Col, Layout, Row } from "antd";
import { NavLink } from 'react-router-dom';

export const Header = ({ isAuthenticated, logout }) => {
  return (
    <Layout.Header>
      <Row justify="space-between">
        <Col>
          <h2>MERN</h2>
        </Col>
        {isAuthenticated && (
          <Col>
            <NavLink key="logout" to="/login">
              <Button onClick={logout}>Logout</Button>
            </NavLink>
          </Col>
        )}
      </Row>
    </Layout.Header>
  );
};

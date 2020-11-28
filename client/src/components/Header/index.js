import { Button, PageHeader } from "antd";
import { NavLink } from 'react-router-dom';

export const Header = ({ isAuthenticated, logout }) => {
  if (!isAuthenticated) {
    return <PageHeader title="MERN" className="container" />;
  }

  return (
    <PageHeader
      title="MERN__"
      className="container"
      extra={[
        <NavLink key="logout" to="/login">
          <Button onClick={logout}>Logout</Button>
        </NavLink>
      ]}
    />
  );
};

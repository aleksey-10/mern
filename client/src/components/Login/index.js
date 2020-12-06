import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { useCallback, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { useHttp } from '../../hooks/https.hooks';

const layout = {
  style: { maxWidth: 800 },
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export const Login = () => {
  const { loading, request } = useHttp();
  const [form] = useForm();
  const auth = useContext(AuthContext);

  const handleSubmit = useCallback(() => {
    form.validateFields().then(({ username, password }) => {
      request('/api/auth/login', 'POST', { username, password })
        .then(({ token, userId }) => {
          auth.login(token, userId);
        });
    })
  }, [request, form, auth]);

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={handleSubmit}
      form={form}
      className="container"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input placeholder="Enter you username" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input type="password" placeholder="Enter your password" />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Row align="middle">
        <Col offset={8} style={{ marginRight: 16 }}>
          <Form.Item className="offset-none">
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
            >
              Submit
            </Button>
          </Form.Item>
        </Col>
        <Col>
          <NavLink to="/register">
            Register
          </NavLink>
        </Col>
      </Row>
    </Form>
  );
};

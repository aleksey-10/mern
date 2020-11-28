import { Form, Input, Button, Row, Col, message } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { NavLink, useHistory } from 'react-router-dom';
import { useHttp } from '../../hooks/https.hooks';

const layout = {
  style: { maxWidth: 800 },
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

export const Register = () => {
  const { loading, request } = useHttp();
  const [form] = useForm();
  const history = useHistory();

  const handleSubmit = () => {
    form.validateFields().then(({ username, password }) => {
      request('/api/auth/register', 'POST', { username, password })
        .then((response) => {
          message.success(response.message);
          history.push('/login');
        })
    })
  };

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
        rules={[{ required: true, message: 'Field is required' }]}
      >
        <Input placeholder="Create your username" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Field is required' }]}
      >
        <Input.Password placeholder="Create your password" />
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
          <NavLink to="/login">
            Back to login
          </NavLink>
        </Col>
      </Row>
    </Form>
  );
};

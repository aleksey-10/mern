import { Checkbox, Col, Input, List, message, Row, Spin } from "antd";
import { useCallback, useEffect, useState } from "react";
import { useHttp } from "../../hooks/https.hooks";
import styles from './styles.module.css';

export const ToDo = () => {
  const [input, setInput] = useState('');
  const { loading, request } = useHttp();
  const [todos, setTodos] = useState([]);
  const [todosFetching, setTodosFetching] = useState(true);

  useEffect(() => {
    request('/api/todo/fetch')
      .then(response => {
        setTodos(response.todos);
        setTodosFetching(false);
      });
  }, [request]);

  const handleChange = useCallback((event) => {
    setInput(event.target.value);
  }, [setInput]);

  const handleKeyPress = useCallback((event) => {
    if (event.key === 'Enter' && input) {
      const newTodo = { title: input.trim(), completed: false };
      request('/api/todo/create', 'POST', newTodo)
        .then((response) => {
          message.success(response.message);
          setTodos(prevTodos => [...prevTodos, { ...newTodo, id: response.todoId }])
        })
    }
  }, [input, request]);

  return (
    <div className={styles.wrapper}>
      <Input
        value={input}
        placeholder="Enter your todo"
        onChange={handleChange}
        onKeyUp={handleKeyPress}
        disabled={loading}
      />
      {todosFetching
        ? (
          <div className={styles.spinner}>
            <Spin size="large" style={{ width: '100%' }} />
          </div>
        ) : (
          <List bordered>
            {todos.map(({ id, title, completed }) => (
              <List.Item key={id}>
                <Row gutter={8}>
                  <Col>
                    <Checkbox checked={completed} />
                  </Col>
                  <Col>
                    {title}
                  </Col>
                </Row>
              </List.Item>
            ))}
          </List>
        )}
    </div>
  );
};

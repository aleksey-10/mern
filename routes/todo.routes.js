const { Router } = require('express');
const router = new Router();
const Todo = require('../models/Todo.models');

// /api/todo

router.post('/create', async (req, res) => {
  try {
    const { title, completed } = req.body;

    const todo = new Todo({ title, completed })

    await todo.save();

    res.json({ message: 'Todo successfully saved', todoId: todo.id });
  } catch {
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/fetch', async (req, res) => {
  try {
    const { title, completed } = req.body;

    const todos = await Todo.find();

    res.json({ todos });
  } catch {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

const { Router } = require('express');
const router = new Router();
const Todo = require('../models/Todo.models');

// /api/todo

router.post('/create', async (req, res) => {
  try {
    const { title, completed, userId } = req.body;

    const todo = new Todo({ title, completed, owner: userId })

    await todo.save();

    res.status(201).json({ message: 'Todo successfully saved', todoId: todo.id });
  } catch {
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/fetch', async (req, res) => {
  try {
    const { userId } = req.body;

    const todos = await Todo.find({ owner: userId });

    res.json({ todos });
  } catch {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

const { Router } = require('express');
const router = new Router();
const User = require('../models/User.models');

// /api/people

router.get('/', async (req, res) => {
  try {
    const people = await User.find({}, { password: 0 });

    res.json({ people });
  } catch {
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/:username', async (req, res) => {
  try {
    const { username } = req.params;

    const user = await User.findOne({ username }, { password: 0 });

    return res.json({ user });
  } catch {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

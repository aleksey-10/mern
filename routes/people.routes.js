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

module.exports = router;

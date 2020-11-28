const { Router } = require('express');
const { check, validationResult } = require('express-validator');
const router = new Router();
const User = require('../models/User.models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');

// /api/auth

router.post(
  '/register',
  [
    check('username', 'Min length is 3 symbols').isLength({ min: 3}),
    check('password', 'Min length is 6 symbols').isLength({ min: 6 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Incorrect register data',
        })
      }

      const { username, password } = req.body;
      
      const candidate = await User.findOne({ username });

      if (candidate) {
        return res.status(400).json({ message: 'User with this name already exists' });
      }

      const hashedPassword = await bcrypt.hash(password, 12);
      const newUser = new User({ username, password: hashedPassword });

      await newUser.save();

      res.json({ message: 'Account was successfully created' });
    } catch {
      res.status(500).json({ message: 'Server error' });
    }
  }
);

router.post(
  '/login',
  async (req, res) => {
    try {
      const { username, password } = req.body;
      
      const user = await User.findOne({ username });

      if (!user) {
        return res.status(400).json({ message: 'User not found' });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ message: 'Incorrect password' });
      }

      const userId = user.id;

      const token = jwt.sign(
        { userId },
        config.get('jwtSecret'),
        { expiresIn: '1h' },
      );

      res.json({ token, userId });
    } catch {
      res.status(500).json({ message: 'Server error' });
    }
  }
);

module.exports = router;

const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const user = require('../../models/User');

//@route    Post api/users
//@desc     Register user
//@access   Public

router.post(
  '/',
  [
    check('name', 'Name is required').isLength({ min: 1 }),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
    } catch (err) {}

    res.send('User route');
  }
);

module.exports = router;

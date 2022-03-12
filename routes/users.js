// Will contain the "Register" route
const express = require('express');
const router = express.Router();

// @route     POST api/users
// @desc      Register A User
// @access    Public
router.post('/', (req, res) => {
	res.send('Register A User');
});

module.exports = router;

// Will contain the following routes - Login, Authentication,
// and a check of the login user

const express = require('express');
const router = express.Router();

// @route     GET api/auth
// @desc      Get Logged In User
// @access    Private
router.get('/', (req, res) => {
	res.send('Get A Logged In User');
});

// @route     POST api/users
// @desc      Auth User & Get Token
// @access    Public
router.post('/', (req, res) => {
	res.send('Authenticate User');
});

module.exports = router;

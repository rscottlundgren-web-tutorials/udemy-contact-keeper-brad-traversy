// Basic CRUD Functionality - Create, Read, Update, Delete
// Each contact is specific to a user which will make this
// slightly more advanced than traditional CRUD API

const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Contact = require('../models/Contact');

// @route     GET api/contacts
// @desc      Get All User's Contacts
// @access    Private
router.get('/', auth, async (req, res) => {
	try {
		const contacts = await Contact.find({ user: req.user.id }).sort({
			date: -1,
		});
		res.json(contacts);
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server Error');
	}
});

// @route     POST api/contacts
// @desc      Add New Contact
// @access    Private
router.post('/', (req, res) => {
	res.send('Add New Contact');
});

// @route     PUT api/contacts/:id
// @desc      Update Contact
// @access    Private
router.put('/:id', (req, res) => {
	res.send('Update Contact');
});

// @route     DELETE api/contacts/:id
// @desc      Delete Contact
// @access    Private
router.delete('/:id', (req, res) => {
	res.send('Delete Contact');
});

module.exports = router;

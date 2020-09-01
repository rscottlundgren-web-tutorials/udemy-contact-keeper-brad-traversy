const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const { check, validationResult } = require('express-validator')

const User = require('../models/User')
const Contact = require('../models/Contact')

// @route   GET api/contacts
// @desc    Get All Users Contacts
// @access  Private
router.get('/', auth, async (req, res) => {
	try {
		const contacts = await Contact.find({ user: req.user.id }).sort({
			date: -1,
		})
		res.json(contacts)
	} catch (err) {
		console.error(err.message)
		res.status(500).send('Server Error.')
	}
})

// @route   POST api/contacts
// @desc    Add New Contact
// @access  Private
router.post(
	'/',
	[auth, [check('name', 'Name Is Required.').not().isEmpty()]],
	async (req, res) => {
		const errors = validationResult(req)
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() })
		}

		const { name, email, phone, type } = req.body

		try {
			const newContact = new Contact({
				name: name,
				email: email,
				phone: phone,
				type: type,
				user: req.user.id,
			})

			const contact = await newContact.save()

			res.json(contact)
		} catch (err) {
			console.error(err.message)
			res.status(500).send('Server Error.')
		}
	}
)

// @route   PUT api/contacts
// @desc    Update A Contact
// @access  Private
router.put('/:id', (req, res) => {
	res.send('Update Contact')
})

// @route   DELETE api/contacts
// @desc    Delete A Contact
// @access  Private
router.delete('/:id', (req, res) => {
	res.send('Delete Contact')
})

module.exports = router

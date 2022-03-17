const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
	// Get The Token From The Header
	const token = req.header('x-auth-token');

	// Check If Not The Token
	if (!token) {
		return res.status(401).json({ msg: 'No Token - Authorization Denied' });
	}

	try {
		const decoded = jwt.verify(token, config.get('jwtSecret'));

		req.user = decoded.user;
		next();
	} catch (error) {
		res.status(401).json({ msg: 'The Token Is Not Valid.' });
	}
};

const authenticate = (req, res, next) => {
	if (req.query.password === 'bigdog') {
		next();
	} else {
		res.send(401);
	}
}

module.exports = authenticate;
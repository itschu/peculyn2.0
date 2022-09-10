const users_api = async (req, res) => {
	const { cookies } = req;

	const val = process.env.COOKIE_TOKEN;
	const jwt = cookies[val];

	if (!jwt) {
		return res.json({ message: "invalid token" });
	}

	return res.json({ message: "valid token" });
};

export default users_api;

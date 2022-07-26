const users_api = async (req, res) => {
	const { cookies } = req;

	const jwt = cookies.peculynCom;

	if (!jwt) {
		return res.json({ message: "invalid token" });
	}

	return res.json({ message: "valid token" });
};

export default users_api;

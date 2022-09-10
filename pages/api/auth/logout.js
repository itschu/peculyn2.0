import { serialize } from "cookie";

const logout_api = async (req, res) => {
	const { cookies } = req;
	const jwt = cookies.get(process.env.COOKIE_TOKEN);

	if (!jwt) {
		return res.json({ message: "not signed in" });
	}

	const serialized = serialize(process.env.COOKIE_TOKEN, null, {
		httpOnly: true,
		secure: process.env.NODE_ENV !== "development",
		sameSite: "strict",
		maxAge: -1,
		path: "/",
	});

	res.setHeader("Set-Cookie", serialized);
	res.status(200).json({ message: "logged out", status: "ok" });
};

export default logout_api;

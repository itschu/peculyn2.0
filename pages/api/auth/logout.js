import { serialize } from "cookie";

export default async (req, res) => {
	const { cookies } = req;
	const jwt = cookies.peculynCom;

	if (!jwt) {
		return res.json({ message: "not signed in" });
	}

	const serialized = serialize("peculynCom", null, {
		httpOnly: true,
		secure: process.env.NODE_ENV !== "development",
		sameSite: "strict",
		maxAge: -1,
		path: "/",
	});

	res.setHeader("Set-Cookie", serialized);
	res.status(200).json({ message: "logged out", status: "ok" });
};

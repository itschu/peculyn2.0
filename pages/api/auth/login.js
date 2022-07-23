import { sign } from "jsonwebtoken";
import { serialize } from "cookie";

const seceret = process.env.AUTH_SECRET;

export default async (req, res) => {
	const data = req.body;

	try {
		const user_req = await fetch(
			`https://peculyn.com/api/v1/users/login/`,
			{
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
					Authorization: process.env.NEXT_PUBLIC_HOME_API,
				},
				body: JSON.stringify(data),
			}
		);

		const user = await user_req.json();

		if (user !== 0) {
			const token = sign(
				{
					exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
					email: data.email,
					account: user.is_admin === "yes" ? "vendor" : "user",
				},
				seceret
			);

			const serialized = serialize("peculynCom", token, {
				httpOnly: true,
				secure: process.env.NODE_ENV !== "development",
				sameSite: "strict",
				maxAge: 60 * 60 * 24 * 30,
				path: "/",
			});

			res.setHeader("Set-Cookie", serialized);
			res.status(200).json({ message: "success", status: "ok" });
		} else {
			res.status(401).json({
				message: "invalid credentials",
				status: "ok",
			});
		}
	} catch (error) {
		res.status(401).json({
			message: "Sorry an error occurred, try again later",
			status: "sever-error",
		});
	}
};

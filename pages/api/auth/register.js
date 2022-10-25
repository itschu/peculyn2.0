import { sign } from "jsonwebtoken";
import { serialize } from "cookie";

const seceret = process.env.AUTH_SECRET;

const login_api = async (req, res) => {
	const data = req.body;

	if (data.password !== data.rePassword)
		return res
			.status(401)
			.json({ message: "Your passwords do not match", status: "ok" });

	try {
		const user_req = await fetch(
			`https://peculyn.online/api/v1/users/register`,
			{
				method: "PUT",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
					Authorization: process.env.NEXT_PUBLIC_HOME_API,
				},
				body: JSON.stringify({ ...data, vendor: data?.vendor || "no" }),
			}
		);

		const message = await user_req.json();

		res.status(200).json({ message, status: "ok" });
	} catch (error) {
		res.status(401).json({
			message: "Sorry an error occurred, try again later",
			status: "sever-error",
		});
	}
};

export default login_api;

import { verify } from "jsonwebtoken";

const seceret = process.env.AUTH_SECRET;

const loggedIn_route = (req, res) => {
	try {
		const { jwt } = JSON.parse(req.body);

		const user = verify(jwt, seceret);

		res.status(200).json({
			user,
		});
	} catch (error) {
		// console.log(error);
		res.status(400).json({ success: false, data: {} });
	}
};

export default loggedIn_route;

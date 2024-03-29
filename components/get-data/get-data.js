import { verify } from "jsonwebtoken";

const getData = (context) => {
	const seceret = process.env.AUTH_SECRET;
	const domain = process.env.DOMAIN;

	const { cookies } = context.req;
	const val = process.env.COOKIE_TOKEN;
	const jwt = cookies[val];

	try {
		const user = verify(jwt, seceret);

		return {
			status: true,
			email: user.email,
			account: user.account,
			domain,
		};
	} catch (error) {
		// console.log(error);
		return {
			status: false,
			domain,
		};
	}
};

export default getData;

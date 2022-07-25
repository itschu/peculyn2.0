import nodeMailer from "nodemailer";

const sendEMail = async ({
	host,
	port,
	user,
	pass,
	from,
	to,
	subject,
	html,
}) => {
	const transporter = {
		host,
		port,
		secure: true, // true for 465, false for other ports
		auth: {
			user,
			pass,
		},
		tls: {
			ciphers: "SSLv3",
		},
	};

	try {
		require("dotenv").config();
		await transporter.sendMail({
			from,
			to,
			subject,
			html,
		});
	} catch (error) {
		console.log(error);
	}
};

export default sendEMail;

import sendMail from "../../components/send-mail";
import { emailTemp } from "../../data";

const mail = async (request, response) => {
	const { method, body } = request;

	switch (method) {
		case "POST":
			try {
				const host = process.env.EMAIL_SERVER_HOST;
				const port = process.env.EMAIL_SERVER_PORT;
				const user = process.env.EMAIL_SERVER_USER;
				const pass = process.env.EMAIL_SERVER_PASSWORD;
				const from = process.env.EMAIL_FROM;

				const to = body.to;
				const subject = body.subject;

				const html = emailTemp(body.body);

				sendMail(host, port, user, pass, from, to, subject, html);

				response.status(200).json({
					success: true,
					message: "Email sent",
				});
			} catch (error) {
				console.log(error);
				res.status(400).json({ success: false, data: [] });
			}
			break;
		default:
			res.status(400).json({ success: false, data: [] });
	}
};

export default mail;

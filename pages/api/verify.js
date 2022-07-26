const verify_route = async (request, response) => {
	const { method, body } = request;

	switch (method) {
		case "POST":
			try {
				const { reference, email, seen, order_id, only_confirm } = body;
				let checkSeen = seen;
				let new_order_id = order_id;
				let new_email = email;
				let message = "";
				let pay_stat = false;

				if (new_email === undefined) {
					let all = await fetch(
						`https://peculyn.com/api/v1/orders/?vendor=${reference}&type=all&for=tran_id`,
						{
							method: "Get",
							headers: {
								Accept: "application/json",
								"Content-Type": "application/json",
								Authorization: process.env.NEXT_PUBLIC_HOME_API,
							},
						}
					);

					let orders = await all.json();

					new_email = orders[0].email;
					checkSeen = orders[0].seen;
					new_order_id = orders[0].order_id;
				}

				if (checkSeen == "no") {
					const seen_send = { reference };

					//update seen column in the dataase
					const seen_req = await fetch(
						`https://peculyn.com/api/v1/orders/`,
						{
							method: "PUT",
							headers: {
								Accept: "application/json",
								"Content-Type": "application/json",
								Authorization: process.env.NEXT_PUBLIC_HOME_API,
							},
							body: JSON.stringify(seen_send),
						}
					);
					await seen_req.json();
				}

				//verify the transaction from paystack
				const confirm_req = await fetch(
					`https://api.paystack.co/transaction/verify/${reference}`,
					{
						method: "GET",
						headers: {
							Authorization: `Bearer ${process.env.PAYSTACK_KEY}`,
							"Content-Type": "application/json",
						},
					}
				);

				const confirm_res = await confirm_req.json();

				if (confirm_res.status) {
					pay_stat = true;
					message =
						"The payment for your order was received. You will receive a mail with more information about the transaction and delivery";
					const ref = { reference, order_id: new_order_id };
					//tick the transaction as paid on our database
					const verify_req = await fetch(
						`https://peculyn.com/api/v1/pay/verify`,
						{
							method: "PUT",
							headers: {
								Accept: "application/json",
								"Content-Type": "application/json",
								Authorization: process.env.NEXT_PUBLIC_HOME_API,
							},
							body: JSON.stringify(ref),
						}
					);

					const verify_res = await verify_req.json();
				} else {
					message =
						"Your payment has not been received yet, please make payment or contact support for any issue";
					if (only_confirm === true) {
						return response.status(200).json({
							success: true,
							data: {
								pay_stat,
								message,
							},
						});
					}
				}

				const all = await fetch(
					`https://peculyn.com/api/v1/orders/?vendor=${new_email}&type=all&for=user`,
					{
						method: "Get",
						headers: {
							Accept: "application/json",
							"Content-Type": "application/json",
							Authorization: process.env.NEXT_PUBLIC_HOME_API,
						},
					}
				);

				const orders = await all.json();

				response.status(200).json({
					success: true,
					data: {
						seen: checkSeen,
						orders,
						message,
						pay_stat,
					},
				});
			} catch (error) {
				console.log(error, "failed to verify transaction");
				response.status(400).json({ success: false, data: [] });
			}
			break;
		default:
			res.status(400).json({ success: false, data: [] });
	}
};

export default verify_route;

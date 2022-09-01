import { uniqueID, validateInput } from "../../data";

const pay_route = async (request, response) => {
	const { method, body } = request;

	switch (method) {
		case "POST":
			try {
				let params = {
					email: body.email,
					amount: parseFloat(body.amount) * 100,
					callback_url: `${process.env.DOMAIN}/account/orders`,
				};
				const { userData } = body;

				params = JSON.stringify(params);

				const validatedInput = validateInput(
					userData.address,
					userData.town,
					userData.state,
					userData.number,
					userData.email,
					userData.firstName,
					userData.lastName,
					userData.delivery_option
				);

				if (!validatedInput) {
					return response.status(200).json({
						success: false,
						data: {
							status: false,
							message: "Required fields cannot be left empty",
						},
					});
				}

				const newUrl = await fetch(
					`https://api.paystack.co/transaction/initialize`,
					{
						method: "Post",
						headers: {
							Authorization: `Bearer ${process.env.PAYSTACK_KEY}`,
							"Content-Type": "application/json",
						},
						body: params,
					}
				);

				let order_id = uniqueID();
				order_id = "id" + order_id.replace(".", "");

				const data = await newUrl.json();
				const {
					data: { reference },
				} = data;

				const { cartState } = body;

				//add each item of the cart items to order table
				const manageOrder = async (type, userData, order_id, el) => {
					const send = {
						uId: userData.unique_id,
						order_id,
						pId: el.id,
						pQty: el.qty,
						price: parseFloat(el.price),
						owner: el.owner,
						name: el.name,
					};

					try {
						await fetch(
							`https://peculyn.online/api/v1/pay/addOrder`,
							{
								method: type,
								headers: {
									Authorization:
										process.env.NEXT_PUBLIC_HOME_API,
									"Content-Type": "application/json",
									Accept: "application/json",
								},
								body: JSON.stringify(send),
							}
						);
					} catch (error) {
						console.log(
							"attempts to add recored failed - ",
							send,
							error
						);
						await fetch(
							`https://peculyn.online/api/v1/pay/addOrder`,
							{
								method: type,
								headers: {
									Authorization:
										process.env.NEXT_PUBLIC_HOME_API,
									"Content-Type": "application/json",
									Accept: "application/json",
								},
								body: JSON.stringify(send),
							}
						);
					}
				};

				cartState.items.forEach((el) =>
					manageOrder("PUT", userData, order_id, el)
				);

				const saveCart = cartState.items.map((el) => ({
					itemId: el.id,
					itemName: el.name,
					itmPrice: el.price,
					itemAmt: el.total_price,
					itemQty: el.qty,
				}));

				const transactionInfo = {
					firstName: userData.firstName,
					lastName: userData.lastName,
					order_amount: body.amount,
					delivery_option: userData.delivery_option,
					email: userData.email,
					order_id,
					number: userData.number,
					address2: userData.address2,
					address: userData.address,
					unique_id: userData.unique_id,
					reference,
					order_obj: JSON.stringify(saveCart),
					items_no: cartState.items.length,
				};

				const initiateTransactionRequest = await fetch(
					`https://peculyn.online/api/v1/pay/`,
					{
						method: "Post",
						headers: {
							Authorization: process.env.NEXT_PUBLIC_HOME_API,
							"Content-Type": "application/json",
							Accept: "application/json",
						},
						body: JSON.stringify(transactionInfo),
					}
				);

				const initiateTransaction =
					await initiateTransactionRequest.json();

				if (!initiateTransaction) {
					cartState.items.forEach((el) =>
						manageOrder("DELETE", userData, order_id, el)
					);

					return response.status(400).json({
						success: false,
						data: {
							status: false,
							message:
								"Sorry an error occurred from our servers, please try again later or contact support",
						},
					});
				} else {
					response.status(200).json({
						success: true,
						data,
					});
				}
			} catch (error) {
				console.log(error, "failed initialized transaction");
				response.status(400).json({ success: false, data: [] });
			}
			break;
		default:
			res.status(400).json({ success: false, data: [] });
	}
};

export default pay_route;

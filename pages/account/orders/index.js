import Nav from "../../../components/nav";
import Footer from "../../../components/footer";
import { useCart } from "../../../context/cart";
import Cart from "../../../components/cart";
import HtmlHead from "../../../components/head";
import VendorOrders from "../../../components/vendor-orders/";
import getData from "../../../components/get-data";

const Order = ({ orders, seen }) => {
	const { cartState } = useCart();

	return (
		<div
			className={`font-body text-gray-700 ${
				cartState.visible === true && "overflow-hidden "
			}`}
		>
			<HtmlHead currentPage={`Orders`} />
			<Nav />
			<VendorOrders allOrders={orders} user="account" seen={seen} />
			<Footer border={true} />
			<Cart />
		</div>
	);
};

export default Order;

export async function getServerSideProps(context) {
	const { email, account, status, domain } = getData(context);
	const { trxref, reference } = context.query;

	if (email) {
		const all = await fetch(
			`https://peculyn.com/api/v1/orders/?vendor=${email}&type=all&for=user`,
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

		return {
			props: { orders },
		};
	} else {
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

		const email = orders[0].email;
		const seen = orders[0].seen;
		const order_id = orders[0].order_id;

		if (seen == "no") {
			const seen_send = { reference };

			//update seen column in the dataase
			const seen_req = await fetch(`https://peculyn.com/api/v1/orders/`, {
				method: "PUT",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
					Authorization: process.env.NEXT_PUBLIC_HOME_API,
				},
				body: JSON.stringify(seen_send),
			});
			await seen_req.json();

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
				const ref = { reference, order_id };
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
			}
		}

		all = await fetch(
			`https://peculyn.com/api/v1/orders/?vendor=${email}&type=all&for=user`,
			{
				method: "Get",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
					Authorization: process.env.NEXT_PUBLIC_HOME_API,
				},
			}
		);

		orders = await all.json();

		return {
			props: { orders, seen },
		};
	}
}

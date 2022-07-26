import Nav from "../../../components/nav";
import Footer from "../../../components/footer";
import { useCart } from "../../../context/cart";
import Cart from "../../../components/cart";
import HtmlHead from "../../../components/head";
import VendorOrders from "../../../components/vendor-orders/";
import getData from "../../../components/get-data";
import { useEffect } from "react";

const Order = ({ orders, seen, message }) => {
	const { cartState, emptyCart } = useCart();

	useEffect(() => {
		if (seen === "no") emptyCart();
	}, []);

	return (
		<div
			className={`font-body text-gray-700 ${
				cartState.visible === true && "overflow-hidden "
			}`}
		>
			<HtmlHead currentPage={`Orders`} />
			<Nav />
			<VendorOrders
				allOrders={orders}
				user="account"
				seen={seen}
				message={message}
			/>
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
		const bodyData = { reference };
		const verify_req = await fetch(`${process.env.DOMAIN}/api/verify`, {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(bodyData),
		});

		const {
			data: { orders, seen, message },
		} = await verify_req.json();

		return {
			props: { orders, seen, message },
		};
	}
}

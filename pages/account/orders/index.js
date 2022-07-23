import Nav from "../../../components/nav";
import Footer from "../../../components/footer";
import { useCart } from "../../../context/cart";
import Cart from "../../../components/cart";
import HtmlHead from "../../../components/head";
import VendorOrders from "../../../components/vendor-orders/";
import getData from "../../../components/get-data";

const Order = ({ orders }) => {
	const { cartState } = useCart();

	return (
		<div
			className={`font-body text-gray-700 ${
				cartState.visible === true && "overflow-hidden "
			}`}
		>
			<HtmlHead currentPage={`Orders`} />
			<Nav />
			<VendorOrders allOrders={orders} user="account" />
			<Footer border={true} />
			<Cart />
		</div>
	);
};

export default Order;

export async function getServerSideProps(context) {
	const { email, account, status, domain } = getData(context);

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
}

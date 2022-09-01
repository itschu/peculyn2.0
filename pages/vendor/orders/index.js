import Nav from "../../../components/nav";
import Footer from "../../../components/footer";
import { useCart } from "../../../context/cart";
import Cart from "../../../components/cart";
import HtmlHead from "../../../components/head";
import VendorOrders from "../../../components/vendor-orders/vendor-orders";
import getData from "../../../components/get-data";

const Orders = ({ orders }) => {
	const { cartState } = useCart();

	return (
		<div
			className={`font-body text-gray-700 ${
				cartState.visible === true && "overflow-hidden "
			}`}
		>
			<HtmlHead currentPage={`Orders`} />
			<Nav />
			<VendorOrders allOrders={orders} />
			<Footer border={true} />
			<Cart />
		</div>
	);
};

export default Orders;

export async function getServerSideProps(context) {
	const { email, account, status, domain } = getData(context);

	const all = await fetch(
		`https://peculyn.online/api/v1/orders/vendors/?email=${email}&type=all`,
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
		props: { orders }, // Will be passed to the page component as props
	};
}

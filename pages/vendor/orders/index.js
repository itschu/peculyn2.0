import Nav from "../../../components/nav";
import Footer from "../../../components/footer";
import { useCart } from "../../../context/cart";
import Cart from "../../../components/cart";
import HtmlHead from "../../../components/head";
import VendorOrders from "../../../components/vendor-orders/vendor-orders";

const Orders = ({ orders }) => {
	const { cartState } = useCart();

	return (
		<div
			className={`font-body text-gray-600 ${
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
	const email = "chucreates@gmail.com";

	const all = await fetch(
		`https://peculyn.com/api/v1/orders/?key=${process.env.NEXT_PUBLIC_HOME_API}&vendor=${email}&type=all`,
		{
			method: "Get",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		}
	);

	const orders = await all.json();

	return {
		props: { orders }, // Will be passed to the page component as props
	};
}

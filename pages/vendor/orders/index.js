import Nav from "../../../components/nav";
import Footer from "../../../components/footer";
import { useCart } from "../../../context/cart";
import Cart from "../../../components/cart";
import HtmlHead from "../../../components/head";
import VendorOrders from "../../../components/vendor-orders/vendor-orders";

const Orders = () => {
	const { cartState } = useCart();

	return (
		<div
			className={`font-body text-gray-600 ${
				cartState.visible === true && "overflow-hidden "
			}`}
		>
			<HtmlHead currentPage={`Orders`} />
			<Nav />
			<VendorOrders />
			<Footer border={true} />
			<Cart />
		</div>
	);
};

export default Orders;

export async function getServerSideProps(context) {
	return {
		props: {}, // Will be passed to the page component as props
	};
}

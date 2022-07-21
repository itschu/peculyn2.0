import Nav from "../components/nav";
import Footer from "../components/footer";
import Newsletter from "../components/newsletter";
import { useCart } from "../context/cart";
import Cart from "../components/cart";
import HtmlHead from "../components/head";
import Checkout from "../components/checkout/";

const CheckoutNow = ({ user, states }) => {
	const { cartState } = useCart();

	return (
		<div
			className={`font-body text-gray-600 ${
				cartState.visible === true && "overflow-hidden "
			}`}
		>
			<HtmlHead currentPage={`Checkout`} />
			<Nav />
			<Checkout user={user} states={states} />
			<Newsletter />
			<Footer />
			<Cart />
		</div>
	);
};

export default CheckoutNow;

export async function getServerSideProps(context) {
	const email = "chucreates@gmail.com";
	const res = await fetch(
		`https://peculyn.com/api/v1/users/?key=${process.env.NEXT_PUBLIC_HOME_API}&email=${email}`,
		{
			method: "Get",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		}
	);

	const state_req = await fetch(
		`https://peculyn.com/api/v1/states/?key=${process.env.NEXT_PUBLIC_HOME_API}`,
		{
			method: "Get",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		}
	);
	const user = await res.json();
	const states = await state_req.json();
	return {
		props: { user, states }, // Will be passed to the page component as props
	};
}

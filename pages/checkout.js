import Nav from "../components/nav";
import Footer from "../components/footer";
import Newsletter from "../components/newsletter";
import { useCart } from "../context/cart";
import Cart from "../components/cart";
import HtmlHead from "../components/head";
import Checkout from "../components/checkout/";
import getData from "../components/get-data";

const CheckoutNow = ({ user, states }) => {
	const { cartState } = useCart();

	return (
		<div
			className={`font-body text-gray-700 ${
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
	const { email, account, status, domain } = getData(context);
	let user;

	if (email) {
		const res = await fetch(
			`https://peculyn.com/api/v1/users/?email=${email}`,
			{
				method: "Get",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
					Authorization: process.env.NEXT_PUBLIC_HOME_API,
				},
			}
		);
		user = await res.json();
	} else {
		user = {
			firstName: "",
			lastName: "",
			address2: "",
			address: "",
			apartment: "",
			town: "",
			state: "",
			number: "",
			email: "",
		};
	}

	const state_req = await fetch(`https://peculyn.com/api/v1/states/`, {
		method: "Get",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			Authorization: process.env.NEXT_PUBLIC_HOME_API,
		},
	});
	const states = await state_req.json();

	return {
		props: { user, states }, // Will be passed to the page component as props
	};
}

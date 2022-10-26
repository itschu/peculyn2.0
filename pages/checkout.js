import Nav from "../components/nav";
import Footer from "../components/footer";
import Newsletter from "../components/newsletter";
import { useCart } from "../context/cart";
import Cart from "../components/cart";
import HtmlHead from "../components/head";
import Checkout from "../components/checkout/";
import getData from "../components/get-data";
import ErrorMsg from "../components/errorMsg";
import { useEffect, useState } from "react";

const CheckoutNow = ({ user, states, account }) => {
	const { cartState } = useCart();
	const [error, setError] = useState({ show: false, message: "" });

	useEffect(() => {
		if (account === "vendor") {
			setError({
				show: true,
				message:
					"You cannot make purchases with this account please create a regular account to be able to access this resource",
			});
		}
	}, [account]);

	return (
		<div
			className={`font-body bg-white text-gray-700 ${
				cartState.visible === true && "overflow-hidden "
			}`}
		>
			<HtmlHead currentPage={`Checkout`} />
			<Nav />

			{account === undefined ? (
				<Checkout user={user} states={states} />
			) : account === "vendor" ? (
				<div className="px-5 md:px-20 my-10">
					<ErrorMsg
						error={error}
						setError={setError}
						cancel={false}
					/>
				</div>
			) : (
				<Checkout user={user} states={states} />
			)}

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
			`https://peculyn.online/api/v1/users/?email=${email}`,
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

	const state_req = await fetch(`https://peculyn.online/api/v1/states/`, {
		method: "Get",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			Authorization: process.env.NEXT_PUBLIC_HOME_API,
		},
	});
	const states = await state_req.json();

	return {
		props: { user, states, account }, // Will be passed to the page component as props
	};
}

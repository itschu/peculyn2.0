import React from "react";
import { useCart } from "../context/cart";
import Footer from "../components/footer";
import Nav from "../components/nav";
import Newsletter from "../components/newsletter";
import HtmlHead from "../components/head";
import Cart from "../components/cart";
import Privacy from "../components/privacy";

const PrivacyPage = () => {
	const { cartState } = useCart();

	return (
		<div
			className={`font-body text-gray-700 ${
				cartState.visible === true && "overflow-hidden "
			}`}
		>
			<HtmlHead currentPage={`Privacy Policy`} order={"reverse"} />
			<Nav />
			<Privacy />
			<Newsletter />
			<Footer />
			<Cart />
		</div>
	);
};

export default PrivacyPage;

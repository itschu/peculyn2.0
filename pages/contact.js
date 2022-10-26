import React from "react";
import { useCart } from "../context/cart";
import Footer from "../components/footer";
import Nav from "../components/nav";
import Newsletter from "../components/newsletter";
import HtmlHead from "../components/head";
import Cart from "../components/cart";
import Contact from "../components/contact";

const ContactPage = () => {
	const { cartState } = useCart();

	return (
		<div
			className={`font-body bg-white text-gray-700 ${
				cartState.visible === true && "overflow-hidden "
			}`}
		>
			<HtmlHead currentPage={`Contact`} order={"reverse"} />
			<Nav />
			<Contact />
			<Newsletter />
			<Footer />
			<Cart />
		</div>
	);
};

export default ContactPage;

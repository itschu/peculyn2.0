import React from "react";
import { useCart } from "../context/cart";
import Footer from "../components/footer";
import Nav from "../components/nav";
import Newsletter from "../components/newsletter";
import HtmlHead from "../components/head";
import Cart from "../components/cart";
import Vendor from "../components/vendor";

const OurVendorsPage = () => {
	const { cartState } = useCart();

	return (
		<div
			className={`font-body bg-white text-gray-700 ${
				cartState.visible === true && "overflow-hidden"
			}`}
		>
			<HtmlHead currentPage={`Vendors`} order={"reverse"} />
			<Nav />
			<Vendor />
			<Newsletter />
			<Footer />
			<Cart />
		</div>
	);
};

export default OurVendorsPage;

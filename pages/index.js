import Nav from "../components/nav";
import Hero from "../components/hero";
import Cateogries from "../components/cat-section";
import HeroBottom from "../components/hero-bottom";
import Newsletter from "../components/newsletter";
import Footer from "../components/footer";
import { useAllProducts } from "../context/products";
import { useEffect } from "react";
import Cart from "../components/cart";
import { useCart } from "../context/cart";
import { all_stale } from "../data";
import HtmlHead from "../components/head";

export default function Home({ products }) {
	const { setAllProducts } = useAllProducts();
	const { cartState } = useCart();

	useEffect(() => {
		setAllProducts(products);
	}, []);

	return (
		<div className="font-body text-gray-600">
			<HtmlHead currentPage={`Home`} />
			<Nav />
			<Hero />
			<HeroBottom />
			<Cateogries />
			<Newsletter />
			<Footer />
			{cartState.visible && <Cart />}
		</div>
	);
}

export const getServerSideProps = async (context) => {
	let products = all_stale;
	try {
		const res = await fetch(
			`https://peculyn.com/api/products/?key=${process.env.NEXT_PUBLIC_HOME_API}`,
			{
				method: "Get",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
			}
		);
		products = await res.json();
	} catch (e) {
		console.log(e);
	}

	return {
		props: {
			products,
		},
	};
};

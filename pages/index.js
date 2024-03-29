import Nav from "../components/nav";
import Hero from "../components/hero";
import Cateogries from "../components/cat-section";
import HeroBottom from "../components/hero-bottom";
import Newsletter from "../components/newsletter";
import Footer from "../components/footer";
import Cart from "../components/cart";
import { useCart } from "../context/cart";
import { MenuContext } from "../context/menu";
import HtmlHead from "../components/head";
import SmallMenu from "../components/small-menu";

export default function Home() {
	const { cartState } = useCart();

	return (
		<MenuContext>
			<div
				className={`font-body bg-white text-gray-700 ${
					cartState.visible === true && "overflow-hidden "
				}`}
			>
				<HtmlHead currentPage={`Home`} />
				<Nav />
				<Hero />
				<HeroBottom />
				<Cateogries />
				<Newsletter />
				<Footer />
				<Cart />
			</div>
		</MenuContext>
	);
}

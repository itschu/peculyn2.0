import Footer from "../../components/footer";
import Nav from "../../components/nav";
import Newsletter from "../../components/newsletter";
import { useCart } from "../../context/cart";
import HtmlHead from "../../components/head";
import Cart from "../../components/cart";
import Shop from "../../components/shop";

const Search = () => {
	const { cartState } = useCart();

	return (
		<div
			className={`font-body text-gray-600 ${
				cartState.visible === true && "overflow-hidden "
			}`}
		>
			<HtmlHead currentPage={`Shop`} order={"reverse"} />
			<Nav />
			<Shop />
			<Newsletter />
			<Footer />
			<Cart />
		</div>
	);
};

export default Search;

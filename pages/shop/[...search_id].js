import Footer from "../../components/footer";
import Nav from "../../components/nav";
import Newsletter from "../../components/newsletter";
import { useCart } from "../../context/cart";
import HtmlHead from "../../components/head";
import Cart from "../../components/cart";
import SearchAll from "../../components/search-all";

const Search = () => {
	const { cartState } = useCart();

	return (
		<div className="font-body text-gray-600">
			<HtmlHead currentPage={`Search Products`} />
			<Nav />
			<SearchAll />
			<Newsletter />
			<Footer />
			{cartState.visible && <Cart />}
		</div>
	);
};

export default Search;

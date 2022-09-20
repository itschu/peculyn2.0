import Footer from "../../components/footer";
import Nav from "../../components/nav";
import Newsletter from "../../components/newsletter";
import { useCart } from "../../context/cart";
import HtmlHead from "../../components/head";
import Cart from "../../components/cart";
import SearchAll from "../../components/search-all";
import Shop from "../../components/shop";

const Search = () => {
	const { cartState } = useCart();

	return (
		<div className="font-body text-gray-700">
			<HtmlHead currentPage={`Search Products`} order={"reverse"} />
			<Nav />
			<SearchAll />
			<Shop noOptions={true} search={true} />
			<Newsletter />
			<Footer />
			{cartState.visible && <Cart />}
		</div>
	);
};

export default Search;

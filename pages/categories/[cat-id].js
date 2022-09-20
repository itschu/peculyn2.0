import Footer from "../../components/footer";
import Nav from "../../components/nav";
import Newsletter from "../../components/newsletter";
import { useCart } from "../../context/cart";
import HtmlHead from "../../components/head";
import Cart from "../../components/cart";
import Shop from "../../components/shop";
import { useRouter } from "next/router";

const ProductCategory = () => {
	const { cartState } = useCart();
	const { query } = useRouter();
	const category = query["cat-id"];

	return (
		<div
			className={`font-body text-gray-700 ${
				cartState.visible === true && "overflow-hidden "
			}`}
		>
			<HtmlHead currentPage={`Shop`} order={"reverse"} />
			<Nav />
			<Shop category={category} />
			<Newsletter />
			<Footer />
			<Cart />
		</div>
	);
};

export default ProductCategory;

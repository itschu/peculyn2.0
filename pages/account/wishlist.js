import Nav from "../../components/nav";
import Footer from "../../components/footer";
import { useCart } from "../../context/cart";
import Cart from "../../components/cart";
import HtmlHead from "../../components/head";
import Wishlist from "../../components/wishlist";
import getData from "../../components/get-data";

const WishList = () => {
	const { cartState } = useCart();

	return (
		<div
			className={`font-body bg-white text-gray-700 ${
				cartState.visible === true && "overflow-hidden "
			}`}
		>
			<HtmlHead currentPage={`WishList`} />
			<Nav />
			<Wishlist />
			<Footer border={true} />
			<Cart />
		</div>
	);
};

export default WishList;

export async function getServerSideProps(context) {
	const { email, account, status, domain } = getData(context);

	return {
		props: {}, // Will be passed to the page component as props
	};
}

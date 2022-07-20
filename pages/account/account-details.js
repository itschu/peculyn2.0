import Nav from "../../components/nav";
import Footer from "../../components/footer";
import { useCart } from "../../context/cart";
import Cart from "../../components/cart";
import HtmlHead from "../../components/head";
import UserDetails from "../../components/user-details";

const AccountDetails = () => {
	const { cartState } = useCart();

	return (
		<div
			className={`font-body text-gray-600 ${
				cartState.visible === true && "overflow-hidden "
			}`}
		>
			<HtmlHead currentPage={`Account Settings`} />
			<Nav />
			<UserDetails />
			<Footer border={true} />
			<Cart />
		</div>
	);
};

export default AccountDetails;

export async function getServerSideProps(context) {
	return {
		props: {}, // Will be passed to the page component as props
	};
}

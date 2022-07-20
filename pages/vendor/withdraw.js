import Nav from "../../components/nav";
import Footer from "../../components/footer";
import { useCart } from "../../context/cart";
import Cart from "../../components/cart";
import HtmlHead from "../../components/head";
import Withdraw from "../../components/withdraw";

const WithdrawFunds = () => {
	const { cartState } = useCart();

	return (
		<div
			className={`font-body text-gray-600 no-scroll ${
				cartState.visible === true && "overflow-hidden "
			}`}
		>
			<HtmlHead currentPage={`Withdraw`} />
			<Nav />
			<Withdraw />
			<Footer border={true} />
			<Cart />
		</div>
	);
};

export default WithdrawFunds;

export async function getServerSideProps(context) {
	return {
		props: {}, // Will be passed to the page component as props
	};
}

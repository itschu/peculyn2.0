import Nav from "../../components/nav";
import Footer from "../../components/footer";
import { useCart } from "../../context/cart";
import Cart from "../../components/cart";
import HtmlHead from "../../components/head";
import Withdraw from "../../components/withdraw";

const WithdrawFunds = ({ completeOrders }) => {
	const { cartState } = useCart();

	return (
		<div
			className={`font-body text-gray-600 no-scroll ${
				cartState.visible === true && "overflow-hidden "
			}`}
		>
			<HtmlHead currentPage={`Withdraw`} />
			<Nav />
			<Withdraw completeOrders={completeOrders} />
			<Footer border={true} />
			<Cart />
		</div>
	);
};

export default WithdrawFunds;

export async function getServerSideProps(context) {
	const email = "chucreates@gmail.com";

	const complete = await fetch(
		`https://peculyn.com/api/v1/orders/?key=${process.env.NEXT_PUBLIC_HOME_API}&vendor=${email}&type=completed`,
		{
			method: "Get",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		}
	);
	const completeOrders = await complete.json();

	return {
		props: { completeOrders }, // Will be passed to the page component as props
	};
}

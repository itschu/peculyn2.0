import Nav from "../../components/nav";
import Footer from "../../components/footer";
import { useCart } from "../../context/cart";
import Cart from "../../components/cart";
import HtmlHead from "../../components/head";
import Withdraw from "../../components/withdraw";
import getData from "../../components/get-data";

const WithdrawFunds = ({ completeOrders }) => {
	const { cartState } = useCart();

	return (
		<div
			className={`font-body text-gray-700 no-scroll ${
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
	const { email, account, status, domain } = getData(context);

	const complete = await fetch(
		`https://peculyn.online/api/v1/orders/vendors/?email=${email}&type=paid`,
		{
			method: "Get",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				Authorization: process.env.NEXT_PUBLIC_HOME_API,
			},
		}
	);
	const completeOrders = await complete.json();

	return {
		props: { completeOrders }, // Will be passed to the page component as props
	};
}

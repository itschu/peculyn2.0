import Nav from "../../components/nav";
import Footer from "../../components/footer";
import { useCart } from "../../context/cart";
import Cart from "../../components/cart";
import HtmlHead from "../../components/head";
import Dash from "../../components/dash";

const Dashboard = ({
	products,
	user = "account",
	pendingOrders,
	completeOrders,
	declinedOrders,
}) => {
	const { cartState } = useCart();

	return (
		<div
			className={`font-body text-gray-600 ${
				cartState.visible === true && "overflow-hidden "
			}`}
		>
			<HtmlHead currentPage={`Dashboard`} />
			<Nav />
			<Dash
				user={user}
				products={products}
				pendingOrders={pendingOrders}
				completeOrders={completeOrders}
				declinedOrders={declinedOrders}
			/>
			<Footer border={true} />
			<Cart />
		</div>
	);
};

export default Dashboard;

export async function getServerSideProps(context) {
	const email = "chucreates@gmail.com";

	const declined = await fetch(
		`https://peculyn.com/api/v1/orders/?key=${process.env.NEXT_PUBLIC_HOME_API}&vendor=${email}&type=declined&for=user`,
		{
			method: "Get",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		}
	);

	const complete = await fetch(
		`https://peculyn.com/api/v1/orders/?key=${process.env.NEXT_PUBLIC_HOME_API}&vendor=${email}&type=completed&for=user`,
		{
			method: "Get",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		}
	);

	const pending = await fetch(
		`https://peculyn.com/api/v1/orders/?key=${process.env.NEXT_PUBLIC_HOME_API}&vendor=${email}&type=pending&for=user`,
		{
			method: "Get",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		}
	);

	const pendingOrders = await pending.json();
	const completeOrders = await complete.json();
	const declinedOrders = await declined.json();

	return {
		props: { pendingOrders, completeOrders, declinedOrders }, // Will be passed to the page component as props
	};
}

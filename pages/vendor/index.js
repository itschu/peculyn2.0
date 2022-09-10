import Dashboard from "../account/dashboard";
import getData from "../../components/get-data";

const Index = ({ products, pendingOrders, completeOrders }) => {
	return (
		<Dashboard
			user={"vendor"}
			products={products}
			pendingOrders={pendingOrders}
			completeOrders={completeOrders}
		/>
	);
};

export default Index;

export async function getServerSideProps(context) {
	const { email, account, status, domain } = getData(context);
	const res = await fetch(
		`https://peculyn.online/api/v1/products/?vendor=${email}`,
		{
			method: "Get",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				Authorization: process.env.NEXT_PUBLIC_HOME_API,
			},
		}
	);

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

	const pending = await fetch(
		`https://peculyn.online/api/v1/orders/vendors/?email=${email}&type=pending`,
		{
			method: "Get",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				Authorization: process.env.NEXT_PUBLIC_HOME_API,
			},
		}
	);

	const products = await res.json();
	const pendingOrders = await pending.json();
	const completeOrders = await complete.json();

	return {
		props: { products, pendingOrders, completeOrders },
	};
}

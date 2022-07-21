import Dashboard from "../account/dashboard";

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
	const email = "chucreates@gmail.com";

	const res = await fetch(
		`https://peculyn.com/api/v1/products/?key=${process.env.NEXT_PUBLIC_HOME_API}&vendor=${email}`,
		{
			method: "Get",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		}
	);

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

	const pending = await fetch(
		`https://peculyn.com/api/v1/orders/?key=${process.env.NEXT_PUBLIC_HOME_API}&vendor=${email}&type=pending`,
		{
			method: "Get",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		}
	);

	const products = await res.json();
	const pendingOrders = await pending.json();
	const completeOrders = await complete.json();

	return {
		props: { products, pendingOrders, completeOrders }, // Will be passed to the page component as props
	};
}

import Dashboard from "./dashboard";

const Index = ({ pendingOrders, completeOrders, declinedOrders }) => {
	return (
		<Dashboard
			user={"user"}
			pendingOrders={pendingOrders}
			completeOrders={completeOrders}
			declinedOrders={declinedOrders}
		/>
	);
};

export default Index;

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

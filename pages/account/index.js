import { useUser } from "../../context/user";
import Dashboard from "./dashboard";
import getData from "../../components/get-data";

const Index = ({ pendingOrders, completeOrders, declinedOrders, account }) => {
	const { protectedPage } = useUser();
	// protectedPage();
	return (
		<Dashboard
			user={account || "user"}
			pendingOrders={pendingOrders}
			completeOrders={completeOrders}
			declinedOrders={declinedOrders}
		/>
	);
};

export default Index;

export async function getServerSideProps(context) {
	const { email, account, status, domain } = getData(context);

	// if (!status) {
	// 	const logout_req = await fetch(`${domain}/api/auth/logout`, {
	// 		method: "get",
	// 	});
	// 	const loggedOut = await logout_req.json();

	// 	return {
	// 		redirect: {
	// 			destination: "/",
	// 			permanent: false,
	// 		},
	// 	};
	// }

	const declined = await fetch(
		`https://peculyn.com/api/v1/orders/?vendor=${email}&type=declined&for=user`,
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
		`https://peculyn.com/api/v1/orders/?vendor=${email}&type=completed&for=user`,
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
		`https://peculyn.com/api/v1/orders/?vendor=${email}&type=pending&for=user`,
		{
			method: "Get",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				Authorization: process.env.NEXT_PUBLIC_HOME_API,
			},
		}
	);

	const pendingOrders = await pending.json();
	const completeOrders = await complete.json();
	const declinedOrders = await declined.json();

	return {
		props: { pendingOrders, completeOrders, declinedOrders, account }, // Will be passed to the page component as props
	};
}

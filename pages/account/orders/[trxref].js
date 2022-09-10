import Order from "./";
import getData from "../../../components/get-data";

const OrderNew = ({ orders }) => {
	return <Order orders={orders} />;
};

export default OrderNew;

export async function getServerSideProps(context) {
	const { email, account, status, domain } = getData(context);

	if (!status) {
		return {
			redirect: {
				permanent: false,
				destination: "/login",
			},
			props: {},
		};
	}

	const all = await fetch(
		`https://peculyn.online/api/v1/orders/?vendor=${email}&type=all&for=user`,
		{
			method: "Get",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				Authorization: process.env.NEXT_PUBLIC_HOME_API,
			},
		}
	);

	const orders = await all.json();
	// console.log(email);

	return {
		props: { orders },
	};
}

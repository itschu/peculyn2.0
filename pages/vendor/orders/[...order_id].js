import Nav from "../../../components/nav";
import Footer from "../../../components/footer";
import { useCart } from "../../../context/cart";
import Cart from "../../../components/cart";
import HtmlHead from "../../../components/head";
import { useState } from "react";
import Loading from "../../../components/loading";
import SingleOrder from "../../../components/single-order";
import getData from "../../../components/get-data";

const Order = ({ order, account }) => {
	const { cartState } = useCart();
	const [loading, setLoading] = useState(false);
	const [uploadStatus, setUploadStatus] = useState("");

	return (
		<div
			className={`font-body text-gray-700 ${
				cartState.visible === true && "overflow-hidden "
			}`}
		>
			<HtmlHead currentPage={`Order Details`} />
			<Nav />
			<SingleOrder order={order} account={account} />
			<Footer border={true} />
			<Cart />
			<Loading uploadStatus={uploadStatus} loading={loading} />
		</div>
	);
};

export default Order;

export async function getServerSideProps(context) {
	const { email, account, status, domain } = getData(context);
	const { order_id } = context.query;
	// const account = order_id[1] || "";

	const ord = await fetch(
		`https://peculyn.online/api/v1/orders/?vendor=${email}&type=single&order_id=${order_id[0]}`,
		{
			method: "Get",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				Authorization: process.env.NEXT_PUBLIC_HOME_API,
			},
		}
	);

	const order = await ord.json();

	return {
		props: { order, account }, // Will be passed to the page component as props
	};
}

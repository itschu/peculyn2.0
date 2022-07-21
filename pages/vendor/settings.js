import Nav from "../../components/nav";
import Footer from "../../components/footer";
import { useCart } from "../../context/cart";
import Cart from "../../components/cart";
import HtmlHead from "../../components/head";
import Settings from "../../components/settings";
import Loading from "../../components/loading";
import { useState } from "react";

const UserSettings = ({ user, states }) => {
	const { cartState } = useCart();
	const [loading, setLoading] = useState(false);
	const [uploadStatus, setUploadStatus] = useState("");

	return (
		<div
			className={`font-body text-gray-600 ${
				cartState.visible === true && "overflow-hidden "
			}`}
		>
			<HtmlHead currentPage={`Settings`} />
			<Nav />
			<Settings
				user={user}
				states={states}
				setLoading={setLoading}
				setUploadStatus={setUploadStatus}
			/>
			<Footer border={true} />
			<Cart />
			{loading && <Loading uploadStatus={uploadStatus} />}
		</div>
	);
};

export default UserSettings;

export async function getServerSideProps(context) {
	const email = "chucreates@gmail.com";
	const res = await fetch(
		`https://peculyn.com/api/v1/users/?key=${process.env.NEXT_PUBLIC_HOME_API}&email=${email}`,
		{
			method: "Get",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		}
	);

	const state_req = await fetch(
		`https://peculyn.com/api/v1/states/?key=${process.env.NEXT_PUBLIC_HOME_API}`,
		{
			method: "Get",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		}
	);
	const user = await res.json();
	const states = await state_req.json();
	return {
		props: { user, states }, // Will be passed to the page component as props
	};
}
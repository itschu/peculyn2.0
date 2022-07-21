import Nav from "../../components/nav";
import Footer from "../../components/footer";
import { useCart } from "../../context/cart";
import Cart from "../../components/cart";
import HtmlHead from "../../components/head";
import UserDetails from "../../components/user-details";
import { useState } from "react";
import Loading from "../../components/loading";

const AccountDetails = ({ user }) => {
	const { cartState } = useCart();
	const [loading, setLoading] = useState(false);
	const [uploadStatus, setUploadStatus] = useState("");

	return (
		<div
			className={`font-body text-gray-600 ${
				cartState.visible === true && "overflow-hidden "
			}`}
		>
			<HtmlHead currentPage={`Account Settings`} />
			<Nav />
			<UserDetails
				user={user}
				setLoading={setLoading}
				setUploadStatus={setUploadStatus}
			/>
			<Footer border={true} />
			<Cart />
			{loading && <Loading uploadStatus={uploadStatus} />}
		</div>
	);
};

export default AccountDetails;

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

	const user = await res.json();
	return {
		props: { user }, // Will be passed to the page component as props
	};
}

import Nav from "../../components/nav";
import Footer from "../../components/footer";
import { useCart } from "../../context/cart";
import Cart from "../../components/cart";
import HtmlHead from "../../components/head";
import UserDetails from "../../components/user-details";
import { useState } from "react";
import Loading from "../../components/loading";
import getData from "../../components/get-data";

const AccountDetails = ({ user }) => {
	const { cartState } = useCart();
	const [loading, setLoading] = useState(false);
	const [uploadStatus, setUploadStatus] = useState("");

	return (
		<div
			className={`font-body bg-white text-gray-700 ${
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
			<Loading uploadStatus={uploadStatus} loading={loading} />
		</div>
	);
};

export default AccountDetails;

export async function getServerSideProps(context) {
	const { email, account, status, domain } = getData(context);
	const res = await fetch(
		`https://peculyn.online/api/v1/users/?email=${email}`,
		{
			method: "Get",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				Authorization: process.env.NEXT_PUBLIC_HOME_API,
			},
		}
	);

	const user = await res.json();
	return {
		props: { user }, // Will be passed to the page component as props
	};
}

import Nav from "../components/nav";
import Footer from "../components/footer";
import SignIn from "../components/sign-in";
import Newsletter from "../components/newsletter";
import { useCart } from "../context/cart";
import Cart from "../components/cart";
import HtmlHead from "../components/head";
import Loading from "../components/loading";
import { useState } from "react";

const Login = () => {
	const { cartState } = useCart();
	const [loading, setLoading] = useState(false);
	const [uploadStatus, setUploadStatus] = useState("");

	return (
		<div
			className={`font-body bg-white text-gray-700 ${
				cartState.visible === true && "overflow-hidden "
			}`}
		>
			<HtmlHead currentPage={`Login`} />
			<Nav />
			<SignIn setLoading={setLoading} setUploadStatus={setUploadStatus} />
			<Newsletter />
			<Footer />
			<Cart />
			<Loading uploadStatus={uploadStatus} loading={loading} />
		</div>
	);
};

export default Login;

export async function getServerSideProps(context) {
	return {
		props: {}, // Will be passed to the page component as props
	};
}

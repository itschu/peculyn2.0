import Nav from "../../components/nav";
import Footer from "../../components/footer";
import SignIn from "../../components/sign-in";
import Newsletter from "../../components/newsletter";
import { useCart } from "../../context/cart";
import Cart from "../../components/cart";
import HtmlHead from "../../components/head";

const Login = () => {
	const { cartState } = useCart();

	return (
		<div
			className={`font-body text-gray-600 ${
				cartState.visible === true && "overflow-hidden "
			}`}
		>
			<HtmlHead currentPage={`Login`} />
			<Nav />
			<SignIn />
			<Newsletter />
			<Footer />
			<Cart />
		</div>
	);
};

export default Login;

export async function getServerSideProps(context) {
	return {
		props: {}, // Will be passed to the page component as props
	};
}

import Nav from "../../components/nav";
import Footer from "../../components/footer";
import { useCart } from "../../context/cart";
import Cart from "../../components/cart";
import HtmlHead from "../../components/head";
import Dash from "../../components/dash";

const Dashboard = ({ user = "account" }) => {
	const { cartState } = useCart();

	return (
		<div
			className={`font-body text-gray-600 ${
				cartState.visible === true && "overflow-hidden "
			}`}
		>
			<HtmlHead currentPage={`Dashboard`} />
			<Nav />
			<Dash user={user} />
			<Footer border={true} />
			<Cart />
		</div>
	);
};

export default Dashboard;

export async function getServerSideProps(context) {
	return {
		props: {}, // Will be passed to the page component as props
	};
}

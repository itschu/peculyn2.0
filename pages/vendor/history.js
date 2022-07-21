import Nav from "../../components/nav";
import Footer from "../../components/footer";
import { useCart } from "../../context/cart";
import Cart from "../../components/cart";
import HtmlHead from "../../components/head";
import History from "../../components/history";

const AllHistory = ({ history }) => {
	const { cartState } = useCart();

	return (
		<div
			className={`font-body text-gray-600 ${
				cartState.visible === true && "overflow-hidden "
			}`}
		>
			<HtmlHead currentPage={`History`} />
			<Nav />
			<History vendorHistory={history} />
			<Footer border={true} />
			<Cart />
		</div>
	);
};

export default AllHistory;

export async function getServerSideProps(context) {
	const email = "chucreates@gmail.com";
	const hist = await fetch(
		`https://peculyn.com/api/v1/history/?key=${process.env.NEXT_PUBLIC_HOME_API}&email=${email}`,
		{
			method: "Get",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		}
	);
	const history = await hist.json();
	return {
		props: {
			history,
		}, // Will be passed to the page component as props
	};
}

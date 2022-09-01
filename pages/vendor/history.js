import Nav from "../../components/nav";
import Footer from "../../components/footer";
import { useCart } from "../../context/cart";
import Cart from "../../components/cart";
import HtmlHead from "../../components/head";
import History from "../../components/history";
import getData from "../../components/get-data";

const AllHistory = ({ history }) => {
	const { cartState } = useCart();

	return (
		<div
			className={`font-body text-gray-700 ${
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
	const { email, account, status, domain } = getData(context);
	const hist = await fetch(
		`https://peculyn.online/api/v1/history/?email=${email}`,
		{
			method: "Get",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				Authorization: process.env.NEXT_PUBLIC_HOME_API,
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

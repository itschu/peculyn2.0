import Nav from "../../../components/nav";
import Footer from "../../../components/footer";
import { useCart } from "../../../context/cart";
import Cart from "../../../components/cart";
import HtmlHead from "../../../components/head";
import VendorProduct from "../../../components/vendor-product";
import { useState } from "react";
import Loading from "../../../components/loading";
import getData from "../../components/get-data";

const AllProducts = ({ products }) => {
	const { cartState } = useCart();
	const [loading, setLoading] = useState(false);
	const [uploadStatus, setUploadStatus] = useState("");

	return (
		<div
			className={`font-body text-gray-700 ${
				cartState.visible === true && "overflow-hidden "
			}`}
		>
			<HtmlHead currentPage={`All Products`} />
			<Nav />
			<VendorProduct
				allVendorProducts={products}
				setLoading={setLoading}
				setUploadStatus={setUploadStatus}
			/>
			<Footer border={true} />
			<Cart />
			<Loading uploadStatus={uploadStatus} loading={loading} />
		</div>
	);
};

export default AllProducts;

export async function getServerSideProps(context) {
	const { email, account, status, domain } = getData(context);

	const res = await fetch(
		`https://peculyn.com/api/v1/products/?vendor=${email}`,
		{
			method: "Get",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				Authorization: process.env.NEXT_PUBLIC_HOME_API,
			},
		}
	);

	const products = await res.json();

	return {
		props: {
			products,
		},
	};
}

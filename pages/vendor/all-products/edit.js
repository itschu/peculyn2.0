import Nav from "../../../components/nav";
import Footer from "../../../components/footer";
import { useCart } from "../../../context/cart";
import Cart from "../../../components/cart";
import HtmlHead from "../../../components/head";
import { useState } from "react";
import AddProduct from "../../../components/addProduct";
import Loading from "../../../components/loading";

const Edit = ({ category }) => {
	const { cartState } = useCart();
	const [loading, setLoading] = useState(false);
	const [uploadStatus, setUploadStatus] = useState("");

	return (
		<div
			className={`font-body text-gray-600 ${
				cartState.visible === true && "overflow-hidden "
			}`}
		>
			<HtmlHead currentPage={`Edit Products`} />
			<Nav />
			<AddProduct
				category={category}
				setLoading={setLoading}
				setUploadStatus={setUploadStatus}
				edit={true}
			/>
			<Footer border={true} />
			<Cart />
			{loading && <Loading uploadStatus={uploadStatus} />}
		</div>
	);
};

export default Edit;

export async function getServerSideProps(context) {
	const res = await fetch(
		`https://peculyn.com/api/categories/?key=${process.env.NEXT_PUBLIC_HOME_API}`,
		{
			method: "Get",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		}
	);

	const category = await res.json();

	return {
		props: { category },
	};
}

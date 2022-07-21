import Nav from "../../components/nav";
import Footer from "../../components/footer";
import { useCart } from "../../context/cart";
import Cart from "../../components/cart";
import HtmlHead from "../../components/head";
import AddProduct from "../../components/addProduct";
import { useState } from "react";
import Loading from "../../components/loading";

const AddNewProduct = ({ category }) => {
	const { cartState } = useCart();
	const [loading, setLoading] = useState(false);
	const [uploadStatus, setUploadStatus] = useState("");

	return (
		<div
			className={`font-body text-gray-600 relative${
				cartState.visible === true && "overflow-hidden "
			}`}
		>
			<HtmlHead currentPage={`Add Product`} />
			<Nav />
			<AddProduct
				category={category}
				setLoading={setLoading}
				setUploadStatus={setUploadStatus}
			/>
			<Footer border={true} />
			<Cart />
			{loading && <Loading uploadStatus={uploadStatus} />}
		</div>
	);
};

export default AddNewProduct;

export const getServerSideProps = async (context) => {
	const res = await fetch(
		`https://peculyn.com/api/v1/categories/?key=${process.env.NEXT_PUBLIC_HOME_API}`,
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
};

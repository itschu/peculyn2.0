import Nav from "../../../components/nav";
import Footer from "../../../components/footer";
import { useCart } from "../../../context/cart";
import Cart from "../../../components/cart";
import HtmlHead from "../../../components/head";
import { useState } from "react";
import AddProduct from "../../../components/addProduct";
import Loading from "../../../components/loading";
import getData from "../../../components/get-data";

const Edit = ({ category, email }) => {
	const { cartState } = useCart();
	const [loading, setLoading] = useState(false);
	const [uploadStatus, setUploadStatus] = useState("");

	return (
		<div
			className={`font-body text-gray-700 ${
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
				email={email}
			/>
			<Footer border={true} />
			<Cart />
			<Loading uploadStatus={uploadStatus} loading={loading} />
		</div>
	);
};

export default Edit;

export async function getServerSideProps(context) {
	const { email, account, status, domain } = getData(context);

	const res = await fetch(`https://peculyn.com/api/v1/categories/`, {
		method: "Get",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			Authorization: process.env.NEXT_PUBLIC_HOME_API,
		},
	});

	const category = await res.json();

	return {
		props: { category },
	};
}

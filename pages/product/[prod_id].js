import Footer from "../../components/footer";
import Nav from "../../components/nav";
import Newsletter from "../../components/newsletter";
import SingleProduct from "../../components/single-product";
import ProductsRow from "../../components/products-row";
import { useRouter } from "next/router";
import Cart from "../../components/cart";
import { useCart } from "../../context/cart";

const Product = () => {
	const router = useRouter();
	const { prod_id } = router.query;

	const { cartState } = useCart();

	return (
		<div
			className={`font-body bg-white text-gray-700 ${
				cartState.visible === true && "overflow-hidden"
			}`}
		>
			<Nav />
			<SingleProduct id={prod_id} />
			<ProductsRow title={"Related Products"} max={5} showView={false} />
			<Newsletter />
			<Footer />
			<Cart />
		</div>
	);
};

export default Product;

// export const getServerSideProps = async (context) => {
// 	const info = await fetch(`https://peculyn.online/api/v1/products`, {
// 		method: "Get",
// 		headers: {
// 			Accept: "application/json",
// 			"Content-Type": "application/json",
//  Authorization: process.env.NEXT_PUBLIC_HOME_API
// 		},
// 	});
// 	const products = await res.json();

// 	return {
// 		props: {
// 			products,
// 		},
// 	};
// };

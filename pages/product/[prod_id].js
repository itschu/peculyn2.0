import Footer from "../../components/footer";
import Nav from "../../components/nav";
import Newsletter from "../../components/newsletter";
import SingleProduct from "../../components/single-product";
import ProductsRow from "../../components/products-row";
import { useRouter } from "next/router";
import Cart from "../../components/cart";
import { useCart } from "../../context/cart";
import HtmlHead from "../../components/head";

const Product = () => {
	const router = useRouter();
	const { prod_id } = router.query;

	const { cartState } = useCart();

	return (
		<div className="font-body text-gray-600">
			<Nav />
			<SingleProduct id={prod_id} />
			<ProductsRow title={"Related Products"} max={5} showView={false} />
			<Newsletter />
			<Footer />
			{cartState.visible && <Cart />}
		</div>
	);
};

export default Product;

// export const getServerSideProps = async (context) => {
// 	const info = await fetch(`https://peculyn.com/api/products`, {
// 		method: "Get",
// 		headers: {
// 			Accept: "application/json",
// 			"Content-Type": "application/json",
// 		},
// 	});
// 	const products = await res.json();

// 	return {
// 		props: {
// 			products,
// 		},
// 	};
// };

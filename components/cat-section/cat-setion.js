import ProductsRow from "../products-row";
import TopCategory from "../top-cat";
import { LoadingProduct } from "../products-row";
import { useAllProducts } from "../../context/products";

const catSetion = () => {
	const { allProducts } = useAllProducts();

	return (
		<div className="py-10 ">
			{allProducts.length > 5 ? (
				<ProductsRow title="Best Selling products" max={5} />
			) : (
				<LoadingProduct max={5} />
			)}
			<TopCategory />

			{allProducts.length > 5 ? (
				<ProductsRow title="Treanding products" max={10} />
			) : (
				<LoadingProduct max={10} />
			)}
		</div>
	);
};

export default catSetion;

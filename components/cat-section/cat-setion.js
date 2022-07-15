import ProductsRow from "../products-row";
import TopCategory from "../top-cat";

const catSetion = () => {
	return (
		<div className="py-10 ">
			<ProductsRow title="Best Selling products" max={5} />
			<TopCategory />
			<ProductsRow title="Treanding products" max={10} />
		</div>
	);
};

export default catSetion;

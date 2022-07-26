import { useRouter } from "next/router";
import { useSelectedProduct } from "../../context/selectedProduct";
import { useAllProducts } from "../../context/products";
import { fileName } from "../../data";
import { useCart } from "../../context/cart";
import Product from "../product";

const ProductsRow = ({ title, max, showView = true }) => {
	const { allProducts } = useAllProducts();
	const { cartState, setCartState, addToCart } = useCart();

	const router = useRouter();
	const { setSelectedProduct } = useSelectedProduct();
	const navigate = (obj) => {
		setSelectedProduct(obj);
		router.push(`/product/${obj.unique_key}`);
	};

	return (
		<div className="px-4 md:px-10 mt-5 ">
			<div className="md:px-20">
				<h2 className="cat-header flex items-center justify-between">
					{title}
					{showView && (
						<span className="text-base font-medium flex items-center justify-between cursor-pointer">
							view all
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-4 w-4 ml-1 inline-block"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
									clipRule="evenodd"
								/>
							</svg>
						</span>
					)}
				</h2>
				<div className="grid sm:grid-cols-5 gap-3 md:gap-6">
					{allProducts.map((el, i) => {
						if (i >= max) return;

						const pic = `https://peculyn.com/assets/images/${
							el?.category
						}/${fileName(el?.img_1)}`;

						let showDiscount = false;
						let discount = 0;
						if (parseInt(el.old_price) <= parseInt(el.price)) {
							showDiscount = false;
						} else {
							showDiscount = true;
							const old_p = parseInt(el.old_price);
							const new_p = parseInt(el.price);
							discount = Math.round(
								((old_p - new_p) * 100) / old_p
							);
						}
						return (
							<Product
								el={el}
								navigate={navigate}
								addToCart={addToCart}
								discount={discount}
								pic={pic}
								showDiscount={showDiscount}
								key={i}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default ProductsRow;

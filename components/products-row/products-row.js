import Image from "next/image";
// import Link from "next/link";
import { useRouter } from "next/router";
import { useSelectedProduct } from "../../context/selectedProduct";
import { useAllProducts } from "../../context/products";
import { fileName } from "../../data";
import { useCart } from "../../context/cart";

const productsRow = ({ title, max, showView = true }) => {
	const { allProducts } = useAllProducts();
	const { cartState, setCartState } = useCart();

	const router = useRouter();
	const { setSelectedProduct } = useSelectedProduct();
	const navigate = (obj) => {
		setSelectedProduct(obj);
		router.push(`/product/${obj.unique_key}`);
	};

	const addToCart = async (el) => {
		const qty = 1;
		const prodDetails = {
			id: el.unique_key,
			price: el.price,
			total_price: qty * el.price,
			in_stock: el.in_stock,
			img_1: el.img_1,
			purchases: el.purchases,
			owner: el.owner,
			name: el.name,
			category: el.category,
			qty,
		};
		const exists = cartState.items.filter((itm) => itm.id == el.unique_key);

		if (exists.length) {
			let index = 0;
			for (let i = 0; i < cartState.items.length; i++) {
				if (cartState.items[i].id === el.unique_key) index = i;
			}

			const newQty = parseInt(exists[0].qty) + 1;
			const newItm = {
				...exists[0],
				qty: newQty,
				total_price: el.price * newQty,
			};
			cartState.items.splice(index, 1, newItm);
			setCartState({ visible: true, items: [...cartState.items] });
		} else {
			setCartState({
				visible: true,
				items: [...cartState.items, prodDetails],
			});
		}
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
							<div
								className="group cursor-pointer col-span-1 bg-white overflow-hidden relative duration-75"
								key={i}
								onClick={() => navigate(el)}
							>
								{showDiscount && (
									<div className="absolute top-2 left-2 z-10 bg-primary-500 py-1 px-2  text-xs font-medium text-white">
										-{discount}%
									</div>
								)}
								<div className="relative w-full h-60">
									<Image
										src={`${pic}`}
										layout="fill"
										className="object-left-top object-cover"
									/>
								</div>

								<div className="absolute top-0 right-0 p-3 bg-white transform -translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth="2"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
										/>
									</svg>
								</div>

								<div
									onClick={(e) => {
										e.stopPropagation();
										addToCart(el);
									}}
									className="px-5 py-2 bg-primary-600 absolute top-44 left-32 md:left-16 opacity-0 group-hover:opacity-100 duration-500 transition-all hover:bg-slate-900 hover:text-white z-10"
								>
									<span className="flex items-center text-sm">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-4 w-4"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
										</svg>
										&nbsp; Add to cart
									</span>
								</div>

								<div className="px-5 py-2 text-center text-neutral-500 mt-2">
									<h5 className="text-base">{el.name}</h5>
									<h6 className="text-sm mt-1">
										{showDiscount && (
											<span className="line-through">
												₦ {el.old_price} &nbsp;
											</span>
										)}
										<span className="text-neutral-900 font-bold">
											₦ {el.price}
										</span>
									</h6>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default productsRow;

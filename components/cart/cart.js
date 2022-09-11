import Image from "next/image";
import { useRouter } from "next/router";
import React, { useMemo, useState } from "react";
import { useCart } from "../../context/cart";
import { useSelectedProduct } from "../../context/selectedProduct";
import { currencyFractionDigits, fileName, truncate } from "../../data";

const Cart = () => {
	const {
		cartState,
		setCartState,
		increaseProducts,
		reduceProducts,
		removeProduct,
	} = useCart();

	const [totalPrice, setTotalPrice] = useState(0);

	//total items in the cart
	let total = 0;
	for (let i = 0; i < cartState.items.length; i++) {
		total += parseInt(cartState.items[i].qty);
	}

	const router = useRouter();
	const { setSelectedProduct } = useSelectedProduct();
	const navigate = (obj) => {
		setSelectedProduct(obj);
		setCartState({ ...cartState, visible: false });
		router.push(`/product/${obj.id}`);
	};

	//calculate the total price
	useMemo(() => {
		let total = 0;
		for (let i = 0; i < cartState.items.length; i++) {
			total += cartState.items[i].total_price;
		}
		setTotalPrice(total);
	}, [cartState]);

	return (
		<div
			className={`fixed top-0 right-0 bottom-0 h-screen w-screen flex justify-end transition-all duration-300 ${
				cartState.visible === false && "invisible opacity-0"
			}`}
			style={{
				zIndex: 100,
				scrollbarWidth: 0,
				background: "#000000ba",
			}}
			onClick={() => setCartState({ ...cartState, visible: false })}
		>
			<div
				className={`w-96 overflow-y-auto bg-white relative px-6 py-6 justify-between transition-all duration-500 flex flex-col  ${
					cartState.visible === false && "translate-x-full"
				}`}
				style={{ zIndex: 1000, scrollbarWidth: 0 }}
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				<div id="top" className="mb-5">
					<div className="flex justify-between items-center border-b pb-5">
						<h4 className="font-semibold relative flex items-center">
							Shopping Cart{" "}
							<div className="bg-primary-600 ml-2 w-5 h-5 z-0 bottom-3 rounded-full overflow-hidden text-white inline-flex justify-center items-center cursor-pointer p-3">
								<span className="font-semibold text-xs">
									{total || cartState.items.length}
								</span>
							</div>
						</h4>

						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5 cursor-pointer"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
							onClick={() =>
								setCartState({ ...cartState, visible: false })
							}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</div>

					<div className="">
						{cartState.items.map((el, indx) => (
							<div className="mt-5" key={indx}>
								<div className="flex items-center justify-between relative group">
									<div className="flex items-center">
										<div
											className="w-16 h-16 bg-slate-400 relative link"
											onClick={() => navigate(el)}
										>
											<Image
												src={`https://peculyn.online/assets/images/${
													el?.category
												}/${fileName(el?.img_1)}`}
												layout="fill"
												alt={el?.name}
											/>
										</div>
										<div className="ml-3">
											<h5
												className="text-sm mb-2 font-semibold link"
												onClick={() => navigate(el)}
											>
												{truncate(el.name, 21)}
											</h5>
											<div className="flex" id="counter">
												<span
													className="p-1 border-2 flex items-center"
													onClick={() =>
														reduceProducts(indx, el)
													}
												>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														className="h-3 w-3"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
														strokeWidth={2}
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															d="M18 12H6"
														/>
													</svg>
												</span>
												<input
													type="text"
													readOnly={true}
													min="1"
													value={el.qty}
													max="50"
													className="border-2 w-10 text-center border-x-0"
												/>
												<span
													className="border-2 p-1 flex items-center"
													onClick={() => {
														increaseProducts(
															indx,
															el
														);
													}}
												>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														className="h-3 w-3"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
														strokeWidth={2}
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															d="M12 6v6m0 0v6m0-6h6m-6 0H6"
														/>
													</svg>
												</span>
											</div>
										</div>
									</div>
									<h6
										className="font-bold"
										style={{ fontSize: 14 }}
									>
										₦
										{el?.total_price.toLocaleString(
											"en-US",
											{
												maximumFractionDigits:
													currencyFractionDigits,
											}
										)}
									</h6>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-4 w-4 cursor-pointer absolute right-0 top-0 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500"
										fill="none"
										viewBox="0 0 24 24"
										stroke="#ff6b6b"
										strokeWidth={2}
										onClick={() => removeProduct(el.id)}
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								</div>
							</div>
						))}
					</div>

					{cartState.items.length === 0 && (
						<p className="text-gray-500 text-center mt-8 text-lg">
							Your cart is empty
						</p>
					)}
				</div>

				<div id="bottom" className="border-t pt-5 font-extrabold">
					<h4
						style={{ fontSize: "16px" }}
						className="flex justify-between"
					>
						<span>SUBTOTAL</span>
						<span>
							₦
							{totalPrice.toLocaleString("en-US", {
								maximumFractionDigits: currencyFractionDigits,
							})}
						</span>
					</h4>
					<div
						id="buy-now"
						onClick={(e) => e.preventDefault()}
						className="py-3 cursor-pointer font-bold flex justify-center duration-500 transition-all  hover:text-primary-700 mt-5"
					>
						<span className="flex items-center text-base">
							Go to Cart
						</span>
					</div>

					<div
						id="buy-now"
						onClick={() => {
							if (cartState.items.length === 0) return;
							setCartState({ ...cartState, visible: false });
							router.push(`/checkout`);
						}}
						className="py-3 cursor-pointer flex font-bold justify-center bg-primary-600 duration-500 transition-all hover:bg-slate-900 hover:text-white mt-2"
					>
						<span className="flex items-center text-base">
							Checkout
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;

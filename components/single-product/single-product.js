import React, { useEffect, useState } from "react";
import Link from "next/link";
import Description from "../description";
import { useSelectedProduct } from "../../context/selectedProduct";
import {
	currencyFractionDigits,
	fileName,
	capitalizeFirstLetter,
	staleData,
} from "../../data";
import Image from "next/image";
import { useCart } from "../../context/cart";
import HtmlHead from "../head";

const SingleProduct = ({ id }) => {
	const { selectedProduct } = useSelectedProduct();
	const { cartState, setCartState } = useCart();

	const [singleProd, setSingleProd] = useState(
		selectedProduct?.stale ? selectedProduct : staleData
	);

	const [qty, setQty] = useState(1);

	let showDiscount = false;
	let discount = 0;

	useEffect(() => {
		if (Object.keys(selectedProduct).length === 0) return;
		setSingleProd(selectedProduct);
	}, [selectedProduct]);

	if (parseInt(singleProd?.old_price) <= parseInt(singleProd?.price)) {
		showDiscount = false;
	} else {
		showDiscount = true;
		const old_p = parseInt(singleProd?.old_price);
		const new_p = parseInt(singleProd?.price);
		discount = Math.round(((old_p - new_p) * 100) / old_p);
	}

	const getData = async () => {
		const prod = await fetch(
			`https://peculyn.com/api/products/?key=${process.env.NEXT_PUBLIC_HOME_API}&id=${id}`,
			{
				method: "Get",
				headers: {
					Accept: "application/json",
				},
			}
		);
		const prod_data = await prod.json();
		if (prod_data !== null) return setSingleProd(prod_data);
	};

	if (singleProd.stale) {
		getData();
	}

	const mainPic = `https://peculyn.com/assets/images/${
		singleProd?.category
	}/${fileName(singleProd?.img_1)}`;

	const oldPrice = singleProd.old_price.toLocaleString("en-US", {
		maximumFractionDigits: currencyFractionDigits,
	});

	const addToCart = async () => {
		const prodDetails = {
			id: singleProd.unique_key,
			price: singleProd.price,
			total_price: qty * singleProd.price,
			in_stock: singleProd.in_stock,
			img_1: singleProd.img_1,
			purchases: singleProd.purchases,
			owner: singleProd.owner,
			name: singleProd.name,
			category: singleProd.category,
			qty,
		};
		const exists = cartState.items.filter(
			(itm) => itm.id == singleProd.unique_key
		);

		if (exists.length) {
			setCartState({
				...cartState,
				visible: true,
			});
		} else {
			setCartState({
				visible: true,
				items: [...cartState.items, prodDetails],
			});
		}
	};

	return (
		<div className="p-4 py-8 md:py-5 md:px-32 mt-5 mb-10">
			<HtmlHead currentPage={`${singleProd.name}`} order="reverse" />

			<span className="flex items-center">
				<Link href="/">
					<span className="link">Home</span>
				</Link>
				&nbsp;/&nbsp;
				{!singleProd.stale ? (
					<Link href="/">
						<span className="link"> {singleProd.category} </span>
					</Link>
				) : (
					<span className="h-3 w-28 bg-slate-300 inline-block skeleton-box"></span>
				)}
				&nbsp;/&nbsp;
				{!singleProd.stale ? (
					singleProd.name
				) : (
					<span className="h-3 w-28 bg-slate-300 inline-block skeleton-box"></span>
				)}
			</span>

			<div className="grid sm:grid-cols-2 gap-10 mt-8 mb-10">
				<div>
					{!singleProd.stale ? (
						<div
							className="bg-neutral-400 mb-5 relative"
							style={{
								height: 650,
								// backgroundImage: `url(${mainPic})`,
								// backgroundPosition: "top",
								// backgroundSize: "cover",
							}}
						>
							<Image
								src={mainPic}
								alt="Picture of the author"
								layout="fill"
							/>
							{showDiscount && (
								<div className="absolute top-2 left-2 z-10 bg-primary-500 py-1 px-2  text-xs font-medium text-white">
									-{discount}%
								</div>
							)}
						</div>
					) : (
						<span
							className="bg-neutral-400 mb-5 relative h-full w-full skeleton-box"
							style={{ height: 550 }}
						></span>
					)}

					<div className="w-full h-full flex gap-3">
						<span className="w-20 h-20 bg-neutral-400 skeleton-box"></span>
						<span className="w-20 h-20 bg-neutral-400 skeleton-box"></span>
						<span className="w-20 h-20 bg-neutral-400 skeleton-box"></span>
						<span className="w-20 h-20 bg-neutral-400 skeleton-box"></span>
					</div>
				</div>

				<div>
					{!singleProd.stale ? (
						<h2 className="text-3xl text-black">
							{singleProd.name}
						</h2>
					) : (
						<span className="h-6 w-72 bg-slate-300 skeleton-box"></span>
					)}
					<h3 className="mt-3 text-2xl">
						{!singleProd.stale ? (
							<>
								{showDiscount && (
									<span className="line-through">
										₦{oldPrice}
									</span>
								)}
								&nbsp;&nbsp;
								<span className="font-bold">
									₦
									{singleProd.price.toLocaleString("en-US", {
										maximumFractionDigits:
											currencyFractionDigits,
									})}
								</span>
							</>
						) : (
							<span className="h-6 w-44 bg-slate-300 skeleton-box"></span>
						)}
					</h3>
					<p className="my-8" style={{ maxWidth: "60ch" }}>
						{!singleProd.stale ? (
							singleProd.short_desc
						) : (
							<>
								<span className="h-3 w-full bg-slate-300 inline-block skeleton-box"></span>
								<span className="h-3 w-full bg-slate-300 inline-block skeleton-box"></span>
								<span className="h-3 w-96 bg-slate-300 inline-block skeleton-box"></span>
								<span className="h-3 w-72 bg-slate-300 inline-block skeleton-box"></span>
							</>
						)}
					</p>
					<div className="flex">
						<div className="flex" id="counter">
							<span
								className="p-3 border border-r-transparent cursor-pointer"
								onClick={() => {
									if (qty > 1) setQty(qty - 1);
								}}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
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
								value={qty}
								max="50"
								className="border w-20 text-center border-x-transparent"
							/>
							<span
								className="border p-3 border-l-transparent cursor-pointer"
								onClick={() => setQty(qty + 1)}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
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

						<div
							onClick={() => addToCart()}
							className="p-1 px-6 cursor-pointer flex items-center bg-primary-600 duration-500 transition-all hover:bg-slate-900 hover:text-white ml-5"
						>
							<span className="flex items-center text-lg">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
								</svg>
								&nbsp; Add to cart
							</span>
						</div>
					</div>

					<div
						id="wishlist"
						className="flex my-8 items-center cursor-pointer"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6 mr-3"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
							/>
						</svg>
						<span>Add to Wishlist</span>
					</div>

					<div
						id="buy-now"
						onClick={(e) => e.preventDefault()}
						className="py-3 cursor-pointer flex justify-center bg-primary-600 duration-500 transition-all hover:bg-slate-900 hover:text-white"
					>
						<span className="flex items-center text-lg">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-7 w-7"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
								<path
									fillRule="evenodd"
									d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
									clipRule="evenodd"
								/>
							</svg>
							&nbsp; Buy Now
						</span>
					</div>

					<div className="mt-4" id="tags">
						<p>
							<span className="text-neutral-400">Category:</span>
							&nbsp;
							{!singleProd.stale ? (
								singleProd.category
							) : (
								<span className="h-3 w-28 bg-slate-300 inline-block skeleton-box"></span>
							)}
						</p>
						<p>
							<span className="text-neutral-">Tags:</span>
							&nbsp;{" "}
							{!singleProd.stale ? (
								singleProd.tags
							) : (
								<span className="h-3 w-28 bg-slate-300 inline-block skeleton-box"></span>
							)}
						</p>
					</div>
				</div>
			</div>

			<Description />
		</div>
	);
};

export default SingleProduct;

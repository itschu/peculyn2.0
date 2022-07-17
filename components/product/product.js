import Image from "next/image";

const Product = ({ el, navigate, addToCart, discount, pic, showDiscount }) => {
	return (
		<div
			className="group cursor-pointer col-span-1 bg-white overflow-hidden relative duration-75"
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
					onError={() => {
						console.log("pic");
						return "/images/design/placeholder-image.png";
					}}
					placeholder="blur"
					blurDataURL="/images/design/placeholder-image.png"
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
};

export default Product;

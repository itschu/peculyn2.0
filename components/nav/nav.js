import Link from "next/link";
import { useCart } from "../../context/cart";

const nav = () => {
	const { cartState, setCartState } = useCart();
	let total = 0;
	for (let i = 0; i < cartState.items.length; i++) {
		total += parseInt(cartState.items[i].qty);
	}

	return (
		<>
			<div id="top-nav" className="py-2 bg-slate-900 text-white text-sm">
				<p className="text-center p-1 flex justify-center ">
					Free shipping &nbsp;
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5 inline-block"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
						<path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
					</svg>
					&nbsp; to all Nigerian states for orders over ₦100,000.00
				</p>
			</div>

			<div
				id="bottom-nav"
				className="flex justify-between p-4 px-6 md:p-4 bg-white sticky top-0 border-t-2 border-slate-900 shadow"
				style={{ zIndex: 100 }}
			>
				<div>
					<h1 className="font-bold font-mono text-xl">
						Peculyn Store
					</h1>
				</div>

				<ul className="hidden md:flex items-center text-black font-medium">
					<li className="nav-category">
						<Link href={"/"}>home</Link>
					</li>
					<li className="nav-category">
						<Link href={"#"}>products</Link>
					</li>
					<li className="nav-category">
						<Link href={"/categories"}>categories</Link>
					</li>
					<li className="nav-category">
						<Link href={"#"}>about us</Link>
					</li>
					<li className="nav-category">
						<Link href={"#"}>contact</Link>
					</li>
				</ul>

				<div className="hidden md:block">
					<Link href={"/search"}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6 account"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/>
						</svg>
					</Link>

					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6 account"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={2}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>

					<div
						className="inline-block relative"
						onClick={() =>
							setCartState({ ...cartState, visible: true })
						}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6 account relative"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
							/>
						</svg>
						<div className="bg-primary-600 w-5   h-5 absolute left-5 z-0 bottom-3 rounded-full overflow-hidden text-white inline-flex justify-center items-center cursor-pointer">
							<span className="font-semibold text-xs">
								{total || cartState.items.length}
							</span>
						</div>
					</div>
				</div>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6 md:hidden"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={2}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M4 6h16M4 12h8m-8 6h16"
					/>
				</svg>
			</div>
		</>
	);
};

export default nav;

import { useRouter } from "next/router";
import Link from "next/link";
import { useCart } from "../../context/cart";
import { useMenu } from "../../context/menu";

const SmallMenu = () => {
	const router = useRouter();
	const path = router.pathname.replace("/", "");

	const { cartState, setCartState } = useCart();
	const { showMenu } = useMenu();

	let total = 0;
	for (let i = 0; i < cartState.items.length; i++) {
		total += parseInt(cartState.items[i].qty);
	}

	return (
		<div
			id="mini-nav"
			className={`sticky z-20 -mt-2 md:hidden ${showMenu || "hidden"}`}
			style={{ top: 62 }}
		>
			<div
				className={`fixed top-0 bottom-0 left-0 right-0 bg-black z-20 opacity-70`}
			/>
			<div className={`bg-white left-0 right-0 z-30 relative py-10`}>
				<ul className="flex flex-col gap-7 items-center text-black font-medium mb-7 ">
					<li className={`nav-category ${path === "" && "active"}`}>
						<Link href={"/"}>home</Link>
					</li>
					<li
						className={`nav-category ${
							path === "shop" && "active"
						}`}
					>
						<Link href={"/shop"}>shop</Link>
					</li>
					<li
						className={`nav-category ${
							path === "categories" && "active"
						}`}
					>
						<Link href={"/categories"}>categories</Link>
					</li>
					<li
						className={`nav-category ${
							path === "home" && "active"
						}`}
					>
						<Link href={"#"}>about us</Link>
					</li>
					<li
						className={`nav-category ${
							path === "contact" && "active"
						}`}
					>
						<Link href={"/contact"} passHref>
							contact
						</Link>
					</li>
				</ul>

				<div className="flex flex-col gap-7 items-center">
					<Link href={"/shop/search/"} passHref>
						<div className="flex items-center">
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
							Search
						</div>
					</Link>

					<Link href={"/account"} passHref>
						<div className="flex items-center">
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
							Account
						</div>
					</Link>

					{/* <div
						className="flex gap-3"
						onClick={() =>
							setCartState({ ...cartState, visible: true })
						}
					>
						<div className="inline-block relative">
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
									d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
								/>
							</svg>
							<div className="bg-primary-600 w-5 h-5 absolute left-5 z-0 bottom-3 rounded-full overflow-hidden text-white inline-flex justify-center items-center cursor-pointer">
								<span className="font-semibold text-xs">
									{total || cartState.items.length}
								</span>
							</div>
						</div>
						My Cart
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default SmallMenu;

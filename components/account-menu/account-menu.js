import Link from "next/link";
import { useRouter } from "next/router";

const AccountMenu = () => {
	const router = useRouter();

	const logout = async () => {
		await fetch("/api/auth/logout");
		router.push("/login");
	};

	return (
		<div
			className="sm:col-span-1 flex flex-col gap-8"
			style={{ fontSize: 16 }}
		>
			<div className="link">
				<Link href={"/account/dashboard"} passHref>
					<span
						className={`flex items-center gap-2 ${
							(router.pathname == "/account" &&
								"activeMenuItem") ||
							(router.pathname == "/account/dashboard" &&
								"activeMenuItem")
						}`}
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
								d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							/>
						</svg>
						Dashboard
					</span>
				</Link>
			</div>

			<div className="link">
				<Link href={"/account/orders"} passHref>
					<span
						className={`flex items-center gap-2 ${
							router.pathname == "/account/orders" &&
							"activeMenuItem"
						}`}
					>
						{" "}
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
								d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
							/>
						</svg>
						Orders
					</span>
				</Link>
			</div>

			<div className="link">
				<Link href={"/account/account-details"} passHref>
					<span
						className={`flex items-center gap-2 ${
							router.pathname == "/account/account-details" &&
							"activeMenuItem"
						}`}
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
								d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
							/>
						</svg>
						Account Details
					</span>
				</Link>
			</div>

			<div className="link">
				<Link href={"/account/billing"} passHref>
					<span
						className={`flex items-center gap-2 ${
							router.pathname == "/account/billing" &&
							"activeMenuItem"
						}`}
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
								d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
							/>
						</svg>
						Billing Info
					</span>
				</Link>
			</div>

			<div className="link">
				<Link href={"/account/wishlist"} passHref>
					<span
						className={`flex items-center gap-2 ${
							router.pathname == "/account/wishlist" &&
							"activeMenuItem"
						}`}
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
								d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
							/>
						</svg>
						Wishlist
					</span>
				</Link>
			</div>

			<div className="link">
				<a onClick={logout}>
					<span className="flex items-center gap-2">
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
								d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
							/>
						</svg>
						Logout
					</span>
				</a>
			</div>
		</div>
	);
};

export default AccountMenu;

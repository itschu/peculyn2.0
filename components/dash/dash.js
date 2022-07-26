import Link from "next/link";
import { currencyFractionDigits } from "../../data";
import AccountMenu from "../account-menu";
import VendorMenu from "../vendor-menu";

const Dash = ({
	user,
	products,
	pendingOrders,
	completeOrders,
	declinedOrders,
}) => {
	let totalOrders = 0;

	if (completeOrders?.length > 0) {
		for (let i = 0; i < completeOrders.length; i++) {
			const el = completeOrders[i];
			totalOrders += parseFloat(el.amount || el.price);
		}
	}

	return (
		<div className="section">
			<div
				id="main-content"
				className="md:mt-10 grid sm:grid-cols-6 gap-10 md:gap-0"
			>
				{user == "vendor" ? <VendorMenu /> : <AccountMenu />}

				<div className="md:border-l md:pl-12 sm:col-span-5 sm:ml-10 ">
					<h3 className="accountHeading"> Dashboard</h3>

					<div className="flex flex-col md:flex-row gap-3 w-full">
						<div className="dash-item bg-green-300">
							{user == "vendor" ? (
								<>
									<h2>Total Sales</h2>
									<p>
										₦
										{totalOrders.toLocaleString("en-US", {
											maximumFractionDigits:
												currencyFractionDigits,
										})}
									</p>
								</>
							) : (
								<>
									<h2>Total Purchases</h2>
									<p>
										₦
										{totalOrders.toLocaleString("en-US", {
											maximumFractionDigits:
												currencyFractionDigits,
										})}
									</p>
								</>
							)}
						</div>

						<div className="dash-item bg-blue-300">
							<h2>Completed Orders</h2>
							<p>
								{completeOrders?.length
									? completeOrders.length
									: 0}
							</p>
						</div>

						<div
							className={` dash-item   ${
								user == "vendor"
									? "bg-violet-400"
									: "bg-red-400 text-white"
							}`}
						>
							{user == "vendor" ? (
								<>
									<h2>All Products</h2>
									<p>{products?.length || products}</p>
								</>
							) : (
								<>
									<h2>Declined Orders</h2>
									<p>
										{declinedOrders?.length ||
											declinedOrders}
									</p>
								</>
							)}
						</div>

						<div
							className="dash-item bg-yellow-200"
							// style={{ background: "#FDD9B5" }}
						>
							<h2>Pending Orders</h2>
							<p>
								{pendingOrders?.length
									? pendingOrders.length
									: 0}
							</p>
						</div>
					</div>

					{user == "vendor" ? (
						<p className="mt-10">
							From your account dashboard you can{" "}
							<Link href={"#"} passHref>
								<span className="link text-black font-semibold">
									add new products
								</span>
							</Link>
							, manage your and track your{" "}
							<Link href={"#"} passHref>
								<span className="link text-black font-semibold">
									orders
								</span>
							</Link>
							, and edit your{" "}
							<Link href={"#"} passHref>
								<span className="link text-black font-semibold">
									products,
								</span>
							</Link>{" "}
							<Link href={"#"} passHref>
								<span className="link text-black font-semibold">
									withdraw funds
								</span>
							</Link>{" "}
							to your bank account and so much more
						</p>
					) : (
						<p className="mt-10">
							From your account dashboard you can view your recent{" "}
							<Link href={"#"} passHref>
								<span className="link text-black font-semibold">
									orders
								</span>
							</Link>
							, manage your{" "}
							<Link href={"#"} passHref>
								<span className="link text-black font-semibold">
									shipping and billing addresses
								</span>
							</Link>
							, and edit your{" "}
							<Link href={"#"} passHref>
								<span className="link text-black font-semibold">
									password and account details.
								</span>
							</Link>
						</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default Dash;

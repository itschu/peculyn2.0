import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { currencyFractionDigits } from "../../data";
import AccountMenu from "../account-menu";
import VendorMenu from "../vendor-menu";
import SuccessMsg from "../../components/successMsg";
import UserOrderTable from "../user-order-table";
import VendorOrderTable from "../vendor-order-table";

const VendorOrders = ({ allOrders, user = "vendor", seen, message }) => {
	const found = allOrders.length > 0;
	const router = useRouter();
	const [success, setSuccess] = useState({
		show: seen === "no" ? true : false,
		message: seen === "no" ? message : "",
	});

	let max = 5;

	const [pageNumber, setPageNumber] = useState(0);
	const [orders, setProducts] = useState(allOrders);

	let productPerPage = max;
	let productSeen = pageNumber * productPerPage;

	const pageCount = Math.ceil(orders.length / productPerPage);

	const changePage = ({ selected }) => {
		window.scrollTo({ top: 0, behavior: "smooth" });
		setPageNumber(selected);
	};

	const navigate = (obj, view = false) => {
		if (view) {
			router.push(`/product/${obj.item_id}/`);
		} else {
			if (user == "vendor") {
				router.push(`/vendor/orders/${obj.tran_id}/`);
			} else {
				router.push(`/vendor/orders/${obj.tran_id}/search`);
			}
		}
	};

	return (
		<div>
			<div className="section">
				<SuccessMsg success={success} setSuccess={setSuccess} />
				<div
					id="main-content"
					className="md:mt-10 grid sm:grid-cols-6 gap-10 md:gap-0"
				>
					{user === "vendor" ? <VendorMenu /> : <AccountMenu />}

					<div className="md:border-l md:pl-12 sm:col-span-5 sm:ml-10">
						<h3 className="accountHeading">
							Orders ({found ? orders.length : 0})
						</h3>

						{found && (
							<p>
								Showing {productSeen + 1} -{" "}
								{max + productSeen < orders.length
									? max + productSeen
									: orders.length}{" "}
								of {orders.length || "0"} results
							</p>
						)}
						{found && (
							<div className="w-full overflow-x-auto table-overflow">
								<div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden mt-5">
									{user !== "vendor" ? (
										<UserOrderTable
											orders={orders}
											productSeen={productSeen}
											productPerPage={productPerPage}
											currencyFractionDigits={
												currencyFractionDigits
											}
											navigate={navigate}
										/>
									) : (
										<VendorOrderTable
											orders={orders}
											productSeen={productSeen}
											productPerPage={productPerPage}
											currencyFractionDigits={
												currencyFractionDigits
											}
											navigate={navigate}
										/>
									)}
								</div>
							</div>
						)}

						{user === "vendor"
							? found || (
									<div className="bg-secondary-400 px-3 md:px-10 py-5 text-white flex flex-col md:flex-row gap-3 md:gap-0 items-center justify-between">
										<p className="flex items-center gap-5">
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
													d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
												/>
											</svg>{" "}
											Sorry you haven&apos;t had any
											purchase yet.
										</p>

										<Link passHref href={"/vendor/add"}>
											<button className="border py-2 px-4 rounded-2xl text-sm">
												{" "}
												Add Product
											</button>
										</Link>
									</div>
							  )
							: found || (
									<div className="bg-secondary-400 px-3 md:px-10 py-5 text-white flex flex-col md:flex-row gap-3 md:gap-0 items-center justify-between">
										<p className="flex items-center gap-5">
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
													d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
												/>
											</svg>{" "}
											You haven&apos;t made any order yet.
										</p>

										<Link passHref href={"/shop"}>
											<button className="border py-2 px-4 rounded-2xl text-sm">
												{" "}
												Go to Shop
											</button>
										</Link>
									</div>
							  )}

						{found && orders.length > max && (
							<ReactPaginate
								previousLabel={"Previous"}
								nextLabel={"Next"}
								pageCount={pageCount}
								onPageChange={changePage}
								containerClassName={"pagination"}
								previousLinkClassName={"prevBtn"}
								nextLinkClassName={"nextBtn"}
								disabledClassName={"paginationDisabled"}
								activeClassName={"paginationActive"}
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default VendorOrders;

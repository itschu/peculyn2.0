import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { currencyFractionDigits } from "../../data";
import AccountMenu from "../account-menu";
import VendorMenu from "../vendor-menu";

const VendorOrders = ({ allOrders, user = "vendor" }) => {
	const found = allOrders.length > 0;
	const router = useRouter();

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

	const navigate = (obj) => {
		if (user == "vendor") {
			router.push(`/vendor/orders/${obj.tran_id}/`);
		} else {
			router.push(`/vendor/orders/${obj.tran_id}/search`);
		}
	};

	return (
		<div>
			<div className="section">
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
									<table className="min-w-full leading-normal">
										<thead>
											<tr>
												<th className="th text-left">
													id
												</th>
												<th className="th">
													Initiated
												</th>
												<th className="th">Amount</th>
												<th className="th">
													Delivered
												</th>
												<th className="th">
													Payment Status
												</th>
												<th className="th">Info</th>
											</tr>
										</thead>
										<tbody>
											{orders
												.slice(
													productSeen,
													productSeen + productPerPage
												)
												.map((el, i) => (
													<tr key={i}>
														<td className="table-td text-left">
															<p className="text-gray-900 whitespace-no-wrap text-left">
																{el.tran_id}
															</p>
														</td>
														<td className="table-td">
															<p className="text-gray-900 whitespace-no-wrap">
																{el.date_init}
															</p>
														</td>
														<td className="table-td">
															<p className="text-gray-900 whitespace-no-wrap">
																₦
																{el.amount.toLocaleString(
																	"en-US",
																	{
																		maximumFractionDigits:
																			currencyFractionDigits,
																	}
																)}
															</p>
														</td>
														<td className="table-td">
															<p className="text-gray-900 whitespace-no-wrap">
																{el.date_finished ===
																	"" &&
																el.payment_status ===
																	"pending" ? (
																	<i>
																		Awaiting
																		payment
																	</i>
																) : el.date_finished ===
																		"" &&
																  el.payment_status ===
																		"paid" ? (
																	<i>
																		Awaiting
																		delivery
																	</i>
																) : el.date_finished !==
																  "" ? (
																	el.date_finished
																) : (
																	"-"
																)}
															</p>
														</td>
														<td className="table-td">
															<span className="relative inline-block px-3 py-1 font-semibold leading-tight">
																<span
																	aria-hidden
																	className={`absolute inset-0 opacity-70 rounded-full ${el.payment_status}`}
																></span>
																<span
																	className={`relative text-${el.payment_status}`}
																>
																	{
																		el.payment_status
																	}
																</span>
															</span>
														</td>
														<td className="table-td text-right">
															<button
																type="button"
																className="inline-block text-gray-500 hover:text-gray-700"
																onClick={() =>
																	navigate(el)
																}
															>
																<svg
																	className="inline-block h-6 w-6 fill-current"
																	viewBox="0 0 24 24"
																>
																	<path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
																</svg>
															</button>
														</td>
													</tr>
												))}
										</tbody>
									</table>
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
											Sorry you haven't had any purchase
											yet.
										</p>

										<Link href={"/vendor/add"}>
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
											You haven't made any order yet.
										</p>

										<Link href={"/shop"}>
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

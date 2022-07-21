import { useState } from "react";
import ReactPaginate from "react-paginate";
import { currencyFractionDigits } from "../../data";
import VendorMenu from "../vendor-menu";

const History = ({ vendorHistory }) => {
	const [pageNumber, setPageNumber] = useState(0);
	const [history, setHistory] = useState(vendorHistory);

	let max = 5;

	let productPerPage = max;
	let productSeen = pageNumber * productPerPage;

	const pageCount = Math.ceil(history.length / productPerPage);

	const changePage = ({ selected }) => {
		window.scrollTo({ top: 0, behavior: "smooth" });
		setPageNumber(selected);
	};

	const found = history.length > 0;

	return (
		<div>
			<div className="section">
				<div
					id="main-content"
					className="md:mt-10 grid sm:grid-cols-6 gap-10 md:gap-0"
				>
					<VendorMenu />

					<div className="md:border-l md:pl-12 sm:col-span-5 sm:ml-10 ">
						<h3 className="accountHeading">History</h3>

						{found && (
							<p>
								Showing {productSeen + 1} -{" "}
								{max + productSeen < history.length
									? max + productSeen
									: history.length}{" "}
								of {history.length || "0"} results
							</p>
						)}

						{found && (
							<div className="w-full overflow-x-auto table-overflow">
								<div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden mt-5">
									<table className="min-w-full leading-normal">
										<thead>
											<tr>
												<th className="th text-left">
													Id
												</th>
												<th className="th">Amount</th>
												<th className="th">Bank</th>
												<th className="th">
													Account Number
												</th>
												<th className="th">Date</th>
												<th className="th">Status</th>
											</tr>
										</thead>
										<tbody>
											{history
												.slice(
													productSeen,
													productSeen + productPerPage
												)
												.map((el, i) => (
													<tr key={i}>
														<td className="table-td">
															<p className="text-gray-900 whitespace-no-wrap text-left">
																{el.id}
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
														<td className="table-td ">
															<p className="text-gray-900 whitespace-no-wrap">
																{el.bank}
															</p>
														</td>
														<td className="table-td">
															<p className="text-gray-900 whitespace-no-wrap">
																{
																	el.account_number
																}
															</p>
														</td>
														<td className="table-td">
															<p className="text-gray-900 whitespace-no-wrap">
																{el.date}
															</p>
														</td>
														<td className="table-td">
															<span className="relative inline-block px-3 py-1 font-semibold leading-tight">
																<span
																	aria-hidden
																	className={`absolute inset-0 opacity-70 rounded-full ${el.status}`}
																></span>
																<span
																	className={`relative text-${el.status}`}
																>
																	{el.status}
																</span>
															</span>
														</td>
													</tr>
												))}
										</tbody>
									</table>
								</div>
							</div>
						)}

						{found || (
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
									You don't have any transaction history yet.
								</p>
							</div>
						)}

						{found && history.length > max && (
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

export default History;

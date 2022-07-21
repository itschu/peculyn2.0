import Link from "next/link";
import AccountMenu from "../account-menu";

const Orders = () => {
	const found = false;
	return (
		<div className="section">
			<div
				id="main-content"
				className="md:mt-10 grid sm:grid-cols-6 gap-10 md:gap-0"
			>
				<AccountMenu />

				<div className="md:border-l md:pl-12 sm:col-span-5 sm:ml-10 overflow-x-auto">
					<h3 className="accountHeading">Orders</h3>

					{found && (
						<table className="min-w-full leading-normal">
							<thead>
								<tr>
									<th className="th">Client / Invoice</th>
									<th className="th">Amount</th>
									<th className="th">Issued / Due</th>
									<th className="th">Status</th>
									<th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
										<div className="flex">
											<div className="flex-shrink-0 w-10 h-10">
												<img
													className="w-full h-full rounded-full"
													src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
													alt=""
												/>
											</div>
											<div className="ml-3">
												<p className="text-gray-900 whitespace-no-wrap">
													Molly Sanders
												</p>
												<p className="text-gray-600 whitespace-no-wrap">
													000004
												</p>
											</div>
										</div>
									</td>
									<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
										<p className="text-gray-900 whitespace-no-wrap">
											$20,000
										</p>
										<p className="text-gray-600 whitespace-no-wrap">
											USD
										</p>
									</td>
									<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
										<p className="text-gray-900 whitespace-no-wrap">
											Sept 28, 2019
										</p>
										<p className="text-gray-600 whitespace-no-wrap">
											Due in 3 days
										</p>
									</td>
									<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
										<span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
											<span
												aria-hidden
												className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
											></span>
											<span className="relative">
												Paid
											</span>
										</span>
									</td>
									<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
										<button
											type="button"
											className="inline-block text-gray-500 hover:text-gray-700"
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
							</tbody>
						</table>
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
				</div>
			</div>
		</div>
	);
};

export default Orders;

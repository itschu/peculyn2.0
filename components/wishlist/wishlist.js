import AccountMenu from "../account-menu";

const Wishlist = () => {
	const found = false;

	return (
		<div className="section">
			<div
				id="main-content"
				className="md:mt-10 grid sm:grid-cols-6 gap-10 md:gap-0"
			>
				<AccountMenu />

				<div className="md:border-l md:pl-12 sm:col-span-5 sm:ml-10 overflow-x-auto">
					{found && (
						<table className="min-w-full leading-normal ">
							<thead>
								<tr>
									<th className="th">Product</th>
									<th className="th">Price</th>
									<th className="th">Added</th>
									<th className="th">Status</th>
									<th className="  px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
									<th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
								</tr>
							</thead>
							<tbody>
								<tr className="bg-neutral-200">
									<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
										<div className="flex items-center">
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
											</div>
										</div>
									</td>

									<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
										<p className="text-gray-900 whitespace-no-wrap">
											$20,000
										</p>
									</td>

									<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
										<p className="text-gray-900 whitespace-no-wrap">
											Sept 28, 2019
										</p>
									</td>

									<td className=" px-5 py-5 border-b border-gray-200 bg-white text-sm">
										<button
											type="button"
											className="inline-flex gap-1 items-center text-gray-500 hover:text-gray-700"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-4 w-4"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												strokeWidth={2}
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M5 13l4 4L19 7"
												/>
											</svg>
											In stock
										</button>
									</td>

									<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
										<span className="relative inline-block px-3 py-2 font-semibold text-green-900 leading-tight cursor-pointer">
											<span
												aria-hidden
												className="absolute inset-0 bg-primary-650 opacity-70 rounded-full"
											></span>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-5 w-5"
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
										</span>
									</td>

									<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
										<button
											type="button"
											className="inline-block text-gray-500 hover:text-red-500"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-4 w-4"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												strokeWidth={2}
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M6 18L18 6M6 6l12 12"
												/>
											</svg>
										</button>
									</td>
								</tr>
							</tbody>
						</table>
					)}

					{found || (
						<div className="bg-secondary-400 px-10 py-5 text-white">
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
								Your Wishlist is currently empty.
							</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Wishlist;

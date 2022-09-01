import { currencyFractionDigits } from "../../data";
import VendorMenu from "../vendor-menu";

const Withdraw = ({ completeOrders }) => {
	let totalOrders = 0;

	if (completeOrders.length > 0) {
		for (let i = 0; i < completeOrders.length; i++) {
			const el = completeOrders[i];
			totalOrders += parseFloat(el.price);
		}
	}
	return (
		<div>
			<div className="section">
				<div
					id="main-content"
					className="md:mt-10 grid sm:grid-cols-6 gap-10 md:gap-0"
				>
					<VendorMenu />

					<div className="md:border-l md:pl-12 sm:col-span-5 sm:ml-10 overflow-x-auto">
						<h3 className="accountHeading">Withdraw Funds</h3>

						<div>
							<div className="flex flex-col md:flex-row gap-5">
								<div className=" w-full bg-green-300 flex flex-col py-14 pl-10">
									<p className="text-lg font-semibold flex items-center gap-2">
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
												d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
											/>
										</svg>
										Total Income
									</p>

									<p className="text-4xl font-bold mt-2">
										₦
										{totalOrders.toLocaleString("en-US", {
											maximumFractionDigits:
												currencyFractionDigits,
										})}
									</p>
								</div>

								<div className="w-full bg-blue-300  flex flex-col py-14 pl-10">
									<p className="text-lg font-semibold flex items-center gap-2">
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
												d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
											/>
										</svg>
										Withdrawable
									</p>

									<p className="text-4xl font-bold mt-2">
										₦0
									</p>
								</div>
							</div>

							<div className="mt-7">
								<label className="font-semibold">
									Amount to withdraw
								</label>
								<div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
									<input type={"text"} className="input" />
									<button
										type="button"
										className="px-6 py-3 bg-slate-700 text-white rounded-full text-sm font-bold"
									>
										Withdraw
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Withdraw;

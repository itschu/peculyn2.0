import { useState } from "react";
import { currencyFractionDigits } from "../../data";
import AccountMenu from "../account-menu";
import ButtonLoader from "../button-loader";
import VendorMenu from "../vendor-menu";
import SuccessMsg from "../successMsg";
import ErrorMsg from "../errorMsg";
import { data } from "autoprefixer";

const SingleOrder = ({ order, account }) => {
	const [load, setLoad] = useState(false);
	const [error, setError] = useState({ show: false, message: "" });
	const [success, setSuccess] = useState({ show: false, message: "" });
	const [thisOrder, setThisOrder] = useState(order);

	const found = thisOrder?.sn !== undefined;
	const items = JSON.parse(thisOrder.items || "[]");

	const verify_info = async () => {
		setLoad(true);
		setError({ show: false, message: "" });

		const bodyData = {
			reference: thisOrder.tran_id,
			email: thisOrder.email,
			seen: thisOrder.seen,
			order_id: thisOrder.order_id,
			only_confirm: true,
		};

		const verify_req = await fetch(`/api/verify`, {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(bodyData),
		});

		const {
			data: { pay_stat, message, declined },
		} = await verify_req.json();

		if (pay_stat) {
			setThisOrder({ ...order, payment_status: "paid" });
			setSuccess({ show: true, message });
		} else {
			if (declined == true)
				setThisOrder({ ...order, payment_status: "declined" });
			setError({ show: true, message });
		}

		setLoad(false);
	};

	return (
		<div>
			<div className="section">
				<ErrorMsg error={error} setError={setError} />

				<SuccessMsg success={success} setSuccess={setSuccess} />

				<div
					id="main-content"
					className="md:mt-10 grid sm:grid-cols-6 gap-10 md:gap-0"
				>
					{account === "user" ? <AccountMenu /> : <VendorMenu />}

					<div className="md:border-l md:pl-12 sm:col-span-5 sm:ml-10 ">
						<h3 className="accountHeading">
							Oder Details ({thisOrder.tran_id})
						</h3>

						<div className="flex flex-col md:flex-row gap-5">
							<div
								className={`w-full ${thisOrder.payment_status} flex flex-col py-16 pl-10`}
							>
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
											d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
										/>
									</svg>
									Total Amount
								</p>

								<p className="text-4xl font-bold mt-2">
									₦{" "}
									{thisOrder.amount.toLocaleString("en-US", {
										maximumFractionDigits:
											currencyFractionDigits,
									})}
								</p>
							</div>

							<div className="w-full flex flex-col py-4 pl-5 gap-3 justify-around">
								<p className="text-base font-semibold flex items-center gap-2">
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
											d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
									Order Date :{" "}
									<span className="font-normal">
										{thisOrder.date_init}
									</span>
								</p>

								<p className="text-base font-semibold flex items-center gap-2">
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
											d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
										/>
									</svg>
									Delivery Date :{" "}
									<span className="font-normal">
										{thisOrder.date_finished === "" &&
										thisOrder.payment_status ===
											"pending" ? (
											<i>Awaiting payment</i>
										) : thisOrder.date_finished === "" &&
										  thisOrder.payment_status ===
												"paid" ? (
											<i>Awaiting delivery</i>
										) : thisOrder.date_finished !== "" ? (
											thisOrder.date_finished
										) : (
											"-"
										)}
									</span>
								</p>

								<p className="text-base font-semibold flex items-center gap-2">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-4 w-4"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth={2}
									>
										<path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
										/>
									</svg>
									Delivery Type :{" "}
									<span className="font-normal">
										{thisOrder.delivery_option}
									</span>
								</p>

								<p className="text-base font-semibold flex items-center gap-2">
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
											d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
										/>
									</svg>
									Payment Status :{" "}
									<span className="font-normal">
										{thisOrder.payment_status}
									</span>
								</p>

								{thisOrder.payment_status == "pending" && (
									<button
										className={` bg-blue-500 text-white p-3 rounded-lg ${
											load && "opacity-60 cursor-auto"
										}`}
										onClick={() => {
											if (load === true) return;
											verify_info();
										}}
									>
										<div
											className={`flex items-center text-base w-full justify-center gap-16 font-bold`}
										>
											{load && (
												<ButtonLoader
													color={"bg-white"}
													active={"bg-white"}
												/>
											)}
											<span>
												{load
													? "Confirming payment"
													: "I have made payment"}
											</span>{" "}
										</div>
									</button>
								)}
							</div>
						</div>
						{found && (
							<div className="w-full overflow-x-auto table-overflow">
								<div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden mt-5">
									<table className="min-w-full leading-normal">
										<thead>
											<tr>
												<th className="th text-left">
													Product Name
												</th>
												<th className="th text-left">
													Price
												</th>
												<th className="th text-left">
													Quantity
												</th>
												<th className="th text-left">
													Amount
												</th>
											</tr>
										</thead>
										<tbody>
											{items.map((el, i) => (
												<tr key={i}>
													<td className="table-td">
														<p className="text-gray-900 whitespace-no-wrap text-left">
															{el.itemName}
														</p>
													</td>
													<td className="table-td">
														<p className="text-gray-900 whitespace-no-wrap text-left">
															₦
															{el.itmPrice.toLocaleString(
																"en-US",
																{
																	maximumFractionDigits:
																		currencyFractionDigits,
																}
															)}
														</p>
													</td>
													<td className="table-td ">
														<p className="text-gray-900 whitespace-no-wrap text-left">
															{el.itemQty}
														</p>
													</td>
													<td className="table-td ">
														<p className="text-gray-900 whitespace-no-wrap text-left">
															₦
															{el.itemAmt.toLocaleString(
																"en-US",
																{
																	maximumFractionDigits:
																		currencyFractionDigits,
																}
															)}
														</p>
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
											d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
										/>
									</svg>{" "}
									This order is invalid
								</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleOrder;

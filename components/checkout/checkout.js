import { useState } from "react";
import { useCart } from "../../context/cart";
import { currencyFractionDigits } from "../../data";
import NigStates from "../nig-states";

const Checkout = ({ user, states, setLoading, setUploadStatus }) => {
	const [userDetails, setUserDetails] = useState(user);
	const { cartState } = useCart();

	return (
		<div className="section">
			<div
				id="main-content"
				className="md:mt-10 grid sm:grid-cols-6 gap-10"
			>
				<form
					className="md:pl-12 sm:col-span-4 sm:ml-10 overflow-x-auto"
					onSubmit={(e) => {
						e.preventDefault();
						updateRecord();
					}}
				>
					<h3 className="accountHeading">
						Your Shipping Information
					</h3>

					<div className="flex gap-7">
						<div className="w-full">
							<label>
								First name <span className="important">*</span>
							</label>
							<input
								type={"text"}
								disabled
								className="input md:w-full"
								value={userDetails.firstName}
								readOnly
								required
							/>
						</div>

						<div className="w-full">
							<label>
								Last name <span className="important">*</span>
							</label>
							<input
								type={"text"}
								disabled
								className="input md:w-full"
								value={userDetails.lastName}
								readOnly
								required
							/>
						</div>
					</div>

					<div className="flex flex-col mt-5">
						<label>Company name (optional) </label>
						<input
							type={"text"}
							className="input md:w-full"
							value={userDetails.address2}
							onChange={(e) =>
								setUserDetails({
									...userDetails,
									address2: e.target.value,
								})
							}
						/>
					</div>

					<div className="flex mt-5">
						<label>Country / Region : &nbsp;</label>
						<p className="font-bold">Nigeria</p>
					</div>

					<div className="flex flex-col mt-5">
						<label>
							Street Address <span className="important">*</span>{" "}
						</label>
						<input
							type={"text"}
							className="input md:w-full"
							placeholder="House number &amp; street name"
							value={userDetails.address}
							onChange={(e) =>
								setUserDetails({
									...userDetails,
									address: e.target.value,
								})
							}
							required
						/>
						<input
							type={"text"}
							className="input md:w-full"
							placeholder="Apartment, suit, unit, etc. (optional)"
							value={userDetails.apartment}
							onChange={(e) =>
								setUserDetails({
									...userDetails,
									apartment: e.target.value,
								})
							}
						/>
					</div>

					<div className="flex flex-col mt-5">
						<label>
							Town / City <span className="important">*</span>
						</label>
						<input
							type={"text"}
							className="input md:w-full"
							value={userDetails.town}
							onChange={(e) =>
								setUserDetails({
									...userDetails,
									town: e.target.value,
								})
							}
							required
						/>
					</div>

					<NigStates
						userDetails={userDetails}
						setUserDetails={setUserDetails}
						states={states}
					/>

					<div className="flex flex-col mt-5">
						<label>
							Phone <span className="important">*</span>
						</label>
						<input
							type={"text"}
							className="input md:w-full"
							value={userDetails.number}
							onChange={(e) =>
								setUserDetails({
									...userDetails,
									number: e.target.value,
								})
							}
							required
						/>
					</div>

					<div className="flex flex-col mt-5">
						<label>
							Email Address <span className="important">*</span>
						</label>
						<input
							type={"text"}
							className="input md:w-full"
							value={userDetails.email}
							readOnly
							disabled
						/>
					</div>
				</form>

				<div className="sm:col-span-2 flex flex-col gap-8 bg-gray-100 p-6 md:p-8 h-fit rounded-lg md:rounded-2xl">
					<p className="flex justify-between font-bold text-lg border-b pb-2">
						<span>Product</span>
						<span>Price</span>
					</p>

					{cartState.items.map((el, i) => (
						<span
							className="border-b pb-3 flex justify-between text-sm md:text-base"
							key={i}
						>
							<span>
								{el.name} x {el.qty}
							</span>
							<span>₦{el.total_price}</span>
						</span>
					))}

					<p className="flex justify-between font-semibold text-lg border-b pb-2">
						<span>Total</span>
						<span>
							₦
							{cartState.items
								.reduce((acc, el) => acc + el?.total_price, 0)
								.toLocaleString("en-US", {
									maximumFractionDigits:
										currencyFractionDigits,
								})}
						</span>
					</p>

					<button
						id="buy-now"
						className="py-3 cursor-pointer flex font-bold justify-center bg-primary-600 duration-500 transition-all hover:bg-slate-900 hover:text-white mt-2"
					>
						<span className="flex items-center text-base">
							Pay Now
						</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Checkout;

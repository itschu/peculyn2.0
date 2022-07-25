import { useRouter } from "next/router";
import { useState } from "react";
import { useCart } from "../../context/cart";
import {
	currencyFractionDigits,
	emptyBillingInfo,
	validateInput,
} from "../../data";
import NigStates from "../nig-states";
import ButtonLoader from "../button-loader/";
import ErrorMsg from "../errorMsg";

const Checkout = ({ user, states, setLoading, setUploadStatus }) => {
	const [userDetails, setUserDetails] = useState(user);
	const [load, setLoad] = useState(false);
	const [error, setError] = useState({ show: false, message: "" });
	const [useInfo, setUseInfo] = useState(true);

	const { cartState } = useCart();
	const router = useRouter();

	const total = cartState.items.reduce((acc, el) => acc + el?.total_price, 0);

	const paynow = async () => {
		setLoad(true);
		setError({ show: false, message: "" });

		const validatedInput = validateInput(
			userDetails.address,
			userDetails.town,
			userDetails.state,
			userDetails.number,
			userDetails.email,
			userDetails.firstName,
			userDetails.lastName,
			userDetails.delivery_option
		);

		if (!validatedInput) {
			setError({
				show: true,
				message: `Required field cannot be left empty`,
			});

			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});

			return setLoad(false);
		}

		const params = {
			email: user.email,
			amount: total,
			userData: userDetails,
			cartState,
		};

		const transaction = await fetch(`/api/pay`, {
			method: "Post",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(params),
		});

		const { data } = await transaction.json();

		if (data?.status) {
			const {
				data: { authorization_url, access_code, reference },
			} = data;
			router.push(authorization_url);
		} else {
			setError({
				show: true,
				message: data.message,
			});

			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
			setLoad(false);
		}
	};

	return (
		<div className="section">
			<ErrorMsg error={error} setError={setError} />

			<div
				id="main-content"
				className="md:mt-10 grid sm:grid-cols-6 gap-10"
			>
				<form
					className="md:pl-12 sm:col-span-4 sm:ml-10 overflow-x-auto"
					onSubmit={(e) => {
						e.preventDefault();
					}}
				>
					<h3 className="accountHeading">
						Your Shipping Information
					</h3>
					<div className="mb-10">
						<input
							type={"checkbox"}
							checked={useInfo}
							onChange={() => {
								setUseInfo(!useInfo);
								useInfo
									? setUserDetails({
											...emptyBillingInfo,
											email: user.email,
											unique_id: user.unique_id,
									  })
									: setUserDetails(user);
							}}
						/>
						<label className="ml-2">
							Use my billing information
						</label>
					</div>

					<div className="flex gap-7">
						<div className="w-full">
							<label>
								First name <span className="important">*</span>
							</label>
							<input
								type={"text"}
								className="input md:w-full"
								value={userDetails.firstName}
								onChange={(e) =>
									setUserDetails({
										...userDetails,
										firstName: e.target.value,
									})
								}
								required
							/>
						</div>

						<div className="w-full">
							<label>
								Last name <span className="important">*</span>
							</label>
							<input
								type={"text"}
								className="input md:w-full"
								value={userDetails.lastName}
								onChange={(e) =>
									setUserDetails({
										...userDetails,
										lastName: e.target.value,
									})
								}
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

					<div className="flex gap-7 mt-5">
						<div className="w-full">
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

						<div className="w-full">
							<label>
								Delivery Option
								<span className="important">*</span>
							</label>
							<select
								className="input md:w-full pr-2"
								value={userDetails.delivery_option || ""}
								onChange={(e) =>
									setUserDetails({
										...userDetails,
										delivery_option: e.target.value,
									})
								}
								required
							>
								<option value={""} disabled>
									Choose...
								</option>
								<option value={"Pick Up"}>Pick Up</option>
								<option value={"Home Delivery"}>
									Home Delivery
								</option>
							</select>
						</div>
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

					<p className="flex justify-between font-bold text-base border-b pb-2">
						<span>Total</span>
						<span>
							₦
							{total.toLocaleString("en-US", {
								maximumFractionDigits: currencyFractionDigits,
							})}
						</span>
					</p>

					<button
						id="buy-now"
						onClick={() => {
							if (load === true) return;
							paynow();
						}}
						className={`group py-3 cursor-pointer flex font-bold justify-center bg-primary-600 duration-500 transition-all hover:bg-slate-900 hover:text-white mt-2 ${
							load && "opacity-60 cursor-auto"
						}`}
					>
						<div
							className={`flex items-center text-base w-full justify-center gap-16 `}
						>
							{load && <ButtonLoader />}
							<span>{load ? "Processing" : "Pay Now"}</span>
						</div>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Checkout;

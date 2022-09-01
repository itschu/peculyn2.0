import { useState } from "react";
import AccountMenu from "../account-menu";
import ErrorMsg from "../errorMsg";
import NigStates from "../nig-states";
import SuccessMsg from "../successMsg";

const BillingInfo = ({ user, states, setLoading, setUploadStatus }) => {
	const [userDetails, setUserDetails] = useState(user);
	const [error, setError] = useState({ show: false, message: "" });
	const [success, setSuccess] = useState({ show: false, message: "" });

	const updateRecord = async () => {
		setLoading(true);
		setError({ show: false, message: "" });
		setSuccess({ show: false, message: "" });

		if (
			userDetails.address == "" ||
			userDetails.town == "" ||
			userDetails.state == "" ||
			userDetails.number == "" ||
			userDetails.email == ""
		) {
			setError({
				show: true,
				message: `Required field cannot be left empty`,
			});

			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});

			return setLoading(false);
		}
		try {
			setUploadStatus("updating your record");
			const compiledData = {
				email: userDetails.email,
				address2: userDetails.address2,
				address: userDetails.address,
				apartment: userDetails.apartment,
				number: userDetails.number,
				state: userDetails.state,
				town: userDetails.town,
			};

			const res = await fetch(
				`https://peculyn.online/api/v1/users/?user=${userDetails.unique_id}&billing=true`,
				{
					method: "PUT",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
						Authorization: process.env.NEXT_PUBLIC_HOME_API,
					},
					body: JSON.stringify(compiledData),
				}
			);
			const response = await res.json();

			if (response == true) {
				setSuccess({
					show: true,
					message: `Your record was updated successfully`,
				});
			} else {
				setError({
					show: true,
					message: `Sorry an error occured when updating your record, please try again later or contact support`,
				});
			}
			setLoading(false);
		} catch (e) {
			setLoading(false);
			alert("please check your network connection");
			console.log(e);
		}

		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});

		setUploadStatus("");
	};

	return (
		<div className="section">
			<ErrorMsg error={error} setError={setError} />

			<SuccessMsg success={success} setSuccess={setSuccess} />
			<div
				id="main-content"
				className="md:mt-10 grid sm:grid-cols-6 gap-10 md:gap-0"
			>
				<AccountMenu />

				<form
					className="md:border-l md:pl-12 sm:col-span-5 sm:ml-10 overflow-x-auto"
					onSubmit={(e) => {
						e.preventDefault();
						updateRecord();
					}}
				>
					<h3 className="accountHeading">Billing Information</h3>

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

					<button
						type="submit"
						className="mt-7 px-6 py-2 bg-slate-700 text-white rounded-full"
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default BillingInfo;

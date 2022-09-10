import { useState } from "react";
import AccountMenu from "../account-menu";
import ErrorMsg from "../errorMsg";
import SuccessMsg from "../successMsg";

const UserDetails = ({ user, setLoading, setUploadStatus }) => {
	const [userDetails, setUserDetails] = useState(user);
	const [error, setError] = useState({ show: false, message: "" });
	const [success, setSuccess] = useState({ show: false, message: "" });

	const updateRecord = async () => {
		setLoading(true);
		setError({ show: false, message: "" });
		setSuccess({ show: false, message: "" });

		if (
			userDetails.firstName == "" ||
			userDetails.lastName == "" ||
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
				firstName: userDetails.firstName,
				lastName: userDetails.lastName,
				email: userDetails.email,
			};

			const res = await fetch(
				`https://peculyn.online/api/v1/users/?user=${userDetails.unique_id}`,
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
			// console.log(e);
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
						Update
					</button>
				</form>
			</div>
		</div>
	);
};

export default UserDetails;

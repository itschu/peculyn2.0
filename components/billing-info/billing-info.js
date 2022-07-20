import AccountMenu from "../account-menu";

const BillingInfo = () => {
	return (
		<div className="section">
			<div
				id="main-content"
				className="md:mt-10 grid sm:grid-cols-6 gap-10 md:gap-0"
			>
				<AccountMenu />

				<div className="md:border-l md:pl-12 sm:col-span-5 sm:ml-10 overflow-x-auto">
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
							/>
						</div>
					</div>

					<div className="flex flex-col mt-5">
						<label>Company name (optional) </label>
						<input type={"text"} className="input md:w-full" />
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
						/>
						<input
							type={"text"}
							className="input md:w-full"
							placeholder="Apartment, suit, unit, etc. (optional)"
						/>
					</div>

					<div className="flex flex-col mt-5">
						<label>
							Town / City <span className="important">*</span>
						</label>
						<input type={"text"} className="input md:w-full" />
					</div>

					<div className="flex flex-col mt-5">
						<label>
							State <span className="important">*</span>
						</label>
						<select className="input md:w-full">
							<option selected disabled>
								Select an option...
							</option>
						</select>
					</div>

					<div className="flex flex-col mt-5">
						<label>
							Phone <span className="important">*</span>
						</label>
						<input type={"text"} className="input md:w-full" />
					</div>

					<div className="flex flex-col mt-5">
						<label>
							Email Address <span className="important">*</span>
						</label>
						<input type={"text"} className="input md:w-full" />
					</div>

					<button
						type="button"
						className="mt-7 px-6 py-2 bg-slate-700 text-white rounded-full"
					>
						Submit
					</button>
				</div>
			</div>
		</div>
	);
};

export default BillingInfo;

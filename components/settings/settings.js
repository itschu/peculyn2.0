import VendorMenu from "../vendor-menu";

const Settings = () => {
	return (
		<div className="section">
			<div
				id="main-content"
				className="md:mt-10 grid sm:grid-cols-6 gap-10 md:gap-0"
			>
				<VendorMenu />

				<div className="md:border-l md:pl-12 sm:col-span-5 sm:ml-10 overflow-x-auto">
					<h3 className="accountHeading">Account Settings</h3>

					<div className="flex gap-7">
						<div className="w-full">
							<label>
								First name <span className="important">*</span>
							</label>
							<input type={"text"} className="input md:w-full" />
						</div>

						<div className="w-full">
							<label>
								Last name <span className="important">*</span>
							</label>
							<input type={"text"} className="input md:w-full" />
						</div>
					</div>

					<div className="flex gap-7 mt-5">
						<div className="w-full">
							<label>
								Bank<span className="important">*</span>
							</label>
							<input type={"text"} className="input md:w-full" />
						</div>

						<div className="w-full">
							<label>
								Account Number{" "}
								<span className="important">*</span>
							</label>
							<input type={"text"} className="input md:w-full" />
						</div>
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
						Update
					</button>
				</div>
			</div>
		</div>
	);
};

export default Settings;

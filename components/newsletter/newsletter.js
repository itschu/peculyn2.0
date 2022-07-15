import React from "react";

const Newsletter = () => {
	return (
		<div
			className="p-4 py-8 md:py-20 md:px-32 mt-10 my-10"
			style={{ backgroundColor: "#f4f4f4" }}
		>
			<div className="flex flex-col md:flex-row items-center justify-around">
				<div className="flex items-end">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-24 w-24 mr-10"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={1}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
						/>
					</svg>
					<div>
						<h2 className="text-2xl font-bold mb-3">
							Our Newsletter
						</h2>
						<p
							style={{ maxWidth: "40ch" }}
							className="text-neutral-500 text-base"
						>
							Subscribe to our newsletter to get information about
							products and discount
						</p>
					</div>
				</div>

				<div className="mt-7 md:mt-0">
					<input
						className="bg-white border px-6 py-3 border-neutral-200 w-96"
						placeholder="Enter your email..."
					/>
					&nbsp;
					<button className="text-sm bg-primary-600 py-3 px-4 border border-neutral-300 focus:bg-primary-800">
						Submit
					</button>
				</div>
			</div>
		</div>
	);
};

export default Newsletter;

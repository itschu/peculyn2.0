const ErrorMsg = ({ error, setError }) => {
	return (
		<div
			className={`p-3 bg-red-400 transition-all duration-700 mb-10 md:mb-0 ${
				error.show ? "opacity-100 block" : "opacity-0 hidden"
			} `}
		>
			<p className="text-center text-white flex items-center justify-center relative">
				<span className="flex items-center gap-4">
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
					</svg>
					{error.message}
				</span>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-5 w-5 absolute right-0 cursor-pointer"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={2}
					onClick={() => setError({ show: false, message: "" })}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</p>
		</div>
	);
};

export default ErrorMsg;

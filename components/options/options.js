const Options = () => {
	return (
		<div className="sm:col-span-1 " style={{ fontSize: 16 }}>
			<div className="seach-option" id="search">
				<div className="flex justify-between mb-2">
					<h2 className="option-heading ">Search </h2>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5 cursor-pointer"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={1}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M19 9l-7 7-7-7"
						/>
					</svg>
				</div>
				<input
					type={"text"}
					className="option-input"
					placeholder="Search Products..."
				/>
			</div>

			<div className="seach-option" id="category">
				<div className="flex justify-between mb-2">
					<h2 className="option-heading">Select Category</h2>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5 cursor-pointer"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={1}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M19 9l-7 7-7-7"
						/>
					</svg>
				</div>
			</div>

			<div className="seach-option" id="sort">
				<div className="flex justify-between mb-2">
					<h2 className="option-heading">Filter Sorting </h2>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5 cursor-pointer"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={1}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M19 9l-7 7-7-7"
						/>
					</svg>
				</div>
				<select className="option-input">
					<option>Default Sorting</option>
					<option>Sort by price: high to low</option>
					<option>Sort by price: low to high</option>
					<option>Sort by latest</option>
					<option>Sort by average rating</option>
					<option>Sort by popularity</option>
				</select>
			</div>

			<div className="seach-option" id="price">
				<div className="flex justify-between mb-2">
					<h2 className="option-heading">Filter by Price</h2>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5 cursor-pointer"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={1}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M19 9l-7 7-7-7"
						/>
					</svg>
				</div>

				<div>
					<div className="flex items-center">
						<input type={"checkbox"} className="mr-4 w-5 h-5" />
						<span>₦1000 - ₦10000</span>
					</div>
				</div>
			</div>

			<div className="seach-option" id="rate">
				<div className="flex justify-between mb-2 -ml">
					<h2 className="option-heading">Filter by Rating</h2>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5 cursor-pointer"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={1}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M19 9l-7 7-7-7"
						/>
					</svg>
				</div>

				<div id="stars" className="flex gap-0 -ml-0">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-7 w-7 stars"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
					</svg>

					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-7 w-7 stars"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
					</svg>

					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-7 w-7 stars"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
					</svg>

					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-7 w-7 stars"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
					</svg>

					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-7 w-7 stars"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
					</svg>
				</div>
			</div>
		</div>
	);
};

export default Options;

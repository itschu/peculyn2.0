import React, { useState, useRef } from "react";

const description = () => {
	const [showDesc, setShowDesc] = useState(true);
	const desc = useRef(null);
	const rev = useRef(null);

	const [review, setReview] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	const showActive = (state, e) => {
		if (state) {
			rev.current.style.border = "1px solid #e5e7eb";
			desc.current.style.border = "1px solid #64748b";

			rev.current.style.color = "black";
			desc.current.style.color = "#ffe24f";
		} else {
			desc.current.style.border = "1px solid #e5e7eb";
			rev.current.style.border = "1px solid #64748b";

			desc.current.style.color = "black";
			rev.current.style.color = "#ffe24f";
		}
		setShowDesc(state);
	};

	return (
		<div className="mt-10 px-0 sm:px-36">
			<div
				id="heading"
				className="flex flex-col sm:flex-row justify-center gap-5"
			>
				<h4
					className="border p-2 text-primary-600 font-semibold cursor-pointer border-slate-500 "
					onClick={(e) => showActive(true, e)}
					ref={desc}
				>
					Description
				</h4>
				<h4
					className="border p-2 font-semibold cursor-pointer"
					onClick={(e) => showActive(false, e)}
					ref={rev}
				>
					Reviews (0)
				</h4>
			</div>
			<div id="content" className="mt-8">
				{showDesc && (
					<div id="desc">
						<ul>
							<li className="list-itm">
								– Material: Black/Brown:100% Rayon.
								Others:Polyester. Ruffle Waist Belted Peg Pants.
							</li>
							<li className="list-itm">
								– Features: High Waist, Elastic Waist with
								Drawstring Belt, Two Side Pockets, Straight Leg,
								Tapered/Carrot, Turn Up
							</li>
							<li className="list-itm">
								– Style: Casual, Work and Elegant. Comfy Fabric,
								Suit for Spring, Summer and Fall
							</li>
						</ul>
					</div>
				)}

				{showDesc || (
					<form id="desc">
						<p>There are no reviews yet</p>
						<p className="mt-10">
							Your email address will not be published. Required
							fields are marked{" "}
							<span
								className="text-lg"
								style={{ color: "#b42f22" }}
							>
								*
							</span>
						</p>

						<div id="stars" className="flex items-center mt-3">
							<p>
								Your rating{" "}
								<span
									className="text-lg"
									style={{ color: "#b42f22" }}
								>
									*
								</span>
							</p>

							<div id="stars" className="flex ml-5">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
								</svg>

								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
								</svg>

								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
								</svg>

								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
								</svg>

								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
								</svg>
							</div>
						</div>

						<div>
							<p className="mt-3">
								Your review{" "}
								<span
									className="text-lg"
									style={{ color: "#b42f22" }}
								>
									*
								</span>
							</p>

							<textarea
								className="border w-full h-60 p-5"
								required
								value={review}
								onChange={(e) => setReview(e.target.value)}
							></textarea>
						</div>

						<div className="mt-3">
							<p>
								Your name{" "}
								<span
									className="text-lg"
									style={{ color: "#b42f22" }}
								>
									*
								</span>
							</p>

							<input
								type={"text"}
								required
								className="border w-full h-12 p-5"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>

						<div className="mt-2">
							<p>
								Your email{" "}
								<span
									className="text-lg"
									style={{ color: "#b42f22" }}
								>
									*
								</span>
							</p>

							<input
								type={"email"}
								className="border w-full h-12 p-5"
								required
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>

						<button
							// onClick={(e) => e.preventDefault()}
							type="submit"
							className="mt-10 p-3 w-40 px-5 cursor-pointer flex items-center justify-center bg-primary-600 duration-500 transition-all text-black hover:bg-slate-900 hover:text-white"
						>
							<span className="flex items-center text-base">
								Add to cart
							</span>
						</button>
					</form>
				)}
			</div>
		</div>
	);
};

export default description;

import React from "react";

const LoadingProduct = ({ max, cols = 5, noPadd = false }) => {
	const dummy = [];
	for (let i = 0; i < max; i++) {
		dummy.push("");
	}
	return (
		<div className={`${cols !== 4 ? "px-4 md:px-10" : ""} mt-5`}>
			<div className={`${cols !== 4 ? (noPadd ? "" : "md:px-20") : ""}`}>
				{cols !== 4 && (
					<span className="w-56 h-4 bg-neutral-300 skeleton-box mb-4"></span>
				)}

				<div
					className={`grid md:grid-cols-${cols} grid-cols-2 gap-3 md:gap-6`}
				>
					{dummy.map((x, i) => (
						<div
							key={i}
							className="flex justify-center items-center flex-col gap-3"
						>
							<div className="relative w-full h-60 bg-neutral-300 skeleton-box mb-1"></div>
							<span className="w-40 h-3 bg-neutral-300 skeleton-box"></span>
							<span className="w-28 h-3 bg-neutral-300 skeleton-box"></span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default LoadingProduct;

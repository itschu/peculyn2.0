import Link from "next/link";
import React from "react";

const HeroBottom = () => {
	return (
		<div className="flex flex-col md:flex-row gap-5 items-center justify-center mt-14 mx-4 md:mx-20">
			<div
				className="h-56 grow flex flex-col justify-center pl-8 w-full"
				style={{
					backgroundImage: `url(/images/design/lady.jpg)`,
					...bgStyle,
				}}
			>
				<h3 className="text-2xl" style={{ maxWidth: "10ch" }}>
					Trending <span className="font-extrabold">Women's</span>{" "}
					wear
				</h3>

				<Link href={""}>
					<span
						className="text-base font-extrabold mt-4 cursor-pointer flex items-center"
						style={{ color: "#792040" }}
					>
						shop now
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-4 w-4 ml-1 inline-block"
							viewBox="0 0 20 20"
							fill="#792040"
						>
							<path
								fillRule="evenodd"
								d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
								clipRule="evenodd"
							/>
						</svg>
					</span>
				</Link>
			</div>

			<div
				className="h-56 grow flex flex-col justify-center pl-8 w-full"
				style={{
					backgroundImage: `url(/images/design/new.jpg)`,
					...bgStyle,
				}}
			>
				<h3 className="text-2xl" style={{ maxWidth: "10ch" }}>
					Best Selling <span className="font-extrabold">Men's</span>{" "}
					shoe
				</h3>

				<Link href={""}>
					<span
						className="text-base font-extrabold mt-4 cursor-pointer flex items-center"
						style={{ color: "#824428" }}
					>
						shop now
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-4 w-4 ml-1 inline-block"
							viewBox="0 0 20 20"
							fill="#824428"
						>
							<path
								fillRule="evenodd"
								d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
								clipRule="evenodd"
							/>
						</svg>
					</span>
				</Link>
			</div>

			<div
				className="h-56 grow flex flex-col justify-center pl-8 w-full"
				style={{
					backgroundImage: `url(/images/design/dude.jpg)`,
					...bgStyle,
					color: "#fff",
				}}
			>
				<h3 className="text-2xl" style={{ maxWidth: "10ch" }}>
					Trending <span className="font-extrabold">Men's</span>{" "}
					fashion
				</h3>

				<Link href={""}>
					<span
						className="text-base font-extrabold mt-4 cursor-pointer flex items-center"
						style={{ color: "#252525" }}
					>
						shop now
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-4 w-4 ml-1 inline-block"
							viewBox="0 0 20 20"
							fill="#252525"
						>
							<path
								fillRule="evenodd"
								d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
								clipRule="evenodd"
							/>
						</svg>
					</span>
				</Link>
			</div>
		</div>
	);
};

const bgStyle = {
	backgroundRepeat: "no-repeat",
	backgroundPosition: "center",
	backgroundSize: "cover",
};

export default HeroBottom;

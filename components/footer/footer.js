import Image from "next/image";
import Link from "next/link";

const date = new Date();

const Footer = ({ border = false }) => {
	return (
		<>
			<div
				className={`p-4 py-8 md:py-5 md:px-32 flex flex-col md:flex-row md:gap-40 border-b border-b-slate-300 ${
					border && "border-t"
				}`}
				style={{ fontSize: 15 }}
			>
				<div className="flex flex-col sm:flex-row sm:items-center sm:gap-10 mb-5">
					<div id="logo" className="h-16 w-12 mb-3 relative mr-10">
						<Image
							src={`/images/design/logo.png`}
							layout="fill"
							alt="site logo"
						/>
					</div>
					<div>
						<p
							style={{ maxWidth: "34ch" }}
							className="flex gap-2 mb-2 items-center"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-10 w-10"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
								/>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
								/>
							</svg>
							<span>
								No.1 eagles estate plot 10 opposite the promise
								Rukpuoku, Rivers State, Nigeria.
							</span>
						</p>
						<p className="flex gap-2 mb-2 link items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
								/>
							</svg>
							+234 808 9500 343
						</p>
						<p className="flex gap-2 mb-2 items-center link">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
								/>
							</svg>
							support@peculyn.com
						</p>
						<p className="flex gap-2 mb-2 items-center link">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
							www.peculyn.com
						</p>

						<div className="flex gap-2 mt-5">
							<Link href={""}>
								<div
									id="facebook-logo"
									className="border p-2 flex justify-center items-center rounded-full link border-neutral-400"
								>
									<Image
										src={`/images/design/facebook.png`}
										height={14}
										width={14}
										alt="facebook logo"
									/>
								</div>
							</Link>

							<Link href={""}>
								<div
									id="instagram-logo"
									className="border p-2 flex justify-center items-center rounded-full link border-neutral-400"
								>
									<Image
										src={`/images/design/instagram.png`}
										height={14}
										width={14}
										alt="instagram logo"
									/>
								</div>
							</Link>
						</div>
					</div>
				</div>

				<div>
					<h3 className=" footer-header">Shop</h3>
					<Link href={"/account"}>
						<p className="link footer-link">My Account</p>
					</Link>
					<Link href={"/account/orders"}>
						<p className="link footer-link">Orders</p>
					</Link>
					<Link href={"/account/wishlist"}>
						<p className="link footer-link">WishList</p>
					</Link>
				</div>

				<div>
					<h3 className=" footer-header">Information</h3>
					<Link href={""}>
						<p className="link footer-link">About Us</p>
					</Link>
					<Link href={""}>
						<p className="link footer-link">Contact Us</p>
					</Link>
					<Link href={""}>
						<p className="link footer-link">Privacy Policy</p>
					</Link>
					<Link href={""}>
						<p className="link footer-link">
							Terms &amp; Conditions
						</p>
					</Link>
				</div>

				<div>
					<h3 className=" footer-header">Customer Service</h3>
					<Link href={""}>
						<p className="link footer-link ">Shop</p>
					</Link>
					<Link href={""}>
						<p className="link footer-link ">Help Center</p>
					</Link>
					<Link href={""}>
						<p className="link footer-link ">FAQ's</p>
					</Link>
					<Link href={""}>
						<p className="link footer-link ">Submit a Dispute</p>
					</Link>
					<Link href={""}>
						<p className="link footer-link ">Track Order</p>
					</Link>
					<Image
						src={`/images/design/payment.png`}
						width={271}
						height={24}
						alt="payment options"
					/>
				</div>
			</div>

			<div className="p-4 py-8 md:py-5 md:px-32 text-sm">
				<p className="text-center">
					&copy; {date.getFullYear()} Peculyn. All Rights Reserved.
				</p>
			</div>
		</>
	);
};

export default Footer;

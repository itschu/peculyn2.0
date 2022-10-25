import Link from "next/link";
import React from "react";

const Vendor = () => {
	return (
		<div className="">
			<div className="p-10" style={{ backgroundColor: "#f4f4f4b3" }}>
				<h1 className="text-2xl md:text-3xl font-bold">Our Vendors</h1>
			</div>

			<div className="py-10 mt-1 p-4 md:py-20 md:px-32 my-10">
				<div className="">
					<h2 className="font-bold text-3xl mb-3">Become a vendor</h2>
					<p>
						Peculyn This is a plattform where you can get the chance
						to become a vendor and upload your goods on Peculyn
						International Super Store for people to purchase, we
						would take care of the logistics and ensure that both
						you and your customer have a seamless experience and we
						are working hard to provide you with this service. By
						Signing up as a vendor you agree to our terms and
						conditions.
					</p>

					<Link href={"/register?vendor=true"}>
						<p className="mt-10 px-5 py-3 bg-primary-600 font-semibold w-fit cursor-pointer rounded-md">
							Create a vendor account
						</p>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Vendor;

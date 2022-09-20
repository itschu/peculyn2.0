import Image from "next/image";
import React from "react";

const About = () => {
	return (
		<div className="">
			<div className="p-10" style={{ backgroundColor: "#f4f4f4b3" }}>
				<h1 className="text-2xl md:text-3xl font-bold">About Us</h1>
			</div>

			<div className="py-10 mt-1 p-4 md:py-20 md:px-32 my-10">
				<div className="">
					<h2 className="font-bold text-3xl mb-3">
						Welcome to Peculyn Superstores
					</h2>
					<p>
						About 81% of consumers shop online from the aftermath of
						the COVID-19 pandemic. 64% percent complain of speed in
						products delivery, less quality of what&apos;s been
						ordered and insecure transactions. Peculyn Superstores
						offers a fast, convenient and secure platform for
						consumers with quality products like clothings,
						accessories and electronics at affordable prices. <br />
						<b>We have very reliable and excellent </b>
						delivery services At peculyn Superstores you get exactly
						what you ordered for.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;

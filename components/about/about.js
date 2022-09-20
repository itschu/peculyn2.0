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
						Duis varius dapibus diam nec porttitor. Suspendisse nec
						justo euismod, laoreet est in, vehicula dui. Curabitur
						sit amet congue dui, sed semper metus. Integer tincidunt
						eu mi nec iaculis. Donec nulla nisi, mattis quis justo,
						mattis posuere velit. Sed posuere posuere consectetur.
						Pendisse laoreet dui justo, eu venenatis nunc ornare.
						Etiam id neque nec nisl vehicula tincidunt. Maecenas
						vestibulum ligula leo, eu accumsan urna hendrerit at.
						Cras sit amet tempor mauris. Nullam purus augue,
						fermentum sed urna id tempor.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;

import Image from "next/image";
import React from "react";

const Contact = () => {
	return (
		<div className="">
			<div className="p-10" style={{ backgroundColor: "#f4f4f4b3" }}>
				<h1 className="text-2xl md:text-3xl font-bold">Contact Us</h1>
			</div>

			<div className="py-10 mt-1 p-4 md:py-20 md:px-32 my-10">
				<div className="flex flex-col md:flex-row">
					<div className="contact-form flex justify-center flex-col gap-4 md:border-r-2 md:pr-10">
						<div>
							<div className="w-6 h-6 relative">
								<Image
									src={"/images/design/map.png"}
									layout="fill"
								/>
							</div>

							<h3>Adress</h3>
							<p>
								No.1 eagles estate plot 10 opposite the promise
								Rukpuoku, Rivers State, Nigeria.
							</p>
						</div>

						<div>
							<div className="w-6 h-6 relative">
								<Image
									src={"/images/design/telephone.png"}
									layout="fill"
								/>
							</div>

							<h3>Phone</h3>
							<p>+234 808 9500 343</p>
						</div>

						<div>
							<div className="w-6 h-6 relative">
								<Image
									src={"/images/design/email.png"}
									layout="fill"
								/>
							</div>

							<h3>Email</h3>
							<p>support@peculyn.online</p>
						</div>
					</div>

					<form className="md:pl-14 mt-10">
						<h2 className="text-xl font-bold mb-4">
							Send Us A Message
						</h2>
						<p>
							If you have any questions or complaints fell free to
							reach us at anytime, our agents are here to help and
							answer you
						</p>

						<div>
							<input
								className="contact-input input"
								placeholder="Full name"
								type={"text"}
							/>

							<input
								className="contact-input input"
								placeholder="Email"
								type={"email"}
							/>

							<input
								className="contact-input input"
								placeholder="Phone Number"
								type={"number"}
							/>

							<textarea
								className="contact-input input max-h-32 "
								placeholder="Your Message"
								style={{ minHeight: "110px" }}
							></textarea>

							<button
								className="mt-8 px-5 py-2 rounded-md bg-primary-650 font-semibold"
								// style={{ backgroundColor: "#f4f4f4b3" }}
							>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;

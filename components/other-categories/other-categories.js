import Link from "next/link";
import React from "react";

const OtherCategories = () => {
	return (
		<div className="p-4 py-10 md:py-20 md:px-32 mt-0 my-10">
			<h2 className="text-3xl font-bold mb-6 capitalize">
				Other categories
			</h2>

			<div className="">
				<Link href={"#"}>
					<div className="flex justify-between items-center cursor-pointer border-b py-3 px-2 hover:bg-gray-100">
						<h3 className="font-semibold">Kitchen Utensils</h3>
						<span className="text-right text-sm font-medium">
							(10)
						</span>
					</div>
				</Link>
				<div className="flex justify-between items-center cursor-pointer border-b py-3 px-2 hover:bg-gray-100">
					<h3 className="font-semibold">Fashion</h3>
					<span className="text-right text-sm font-medium">(28)</span>
				</div>
			</div>
		</div>
	);
};

export default OtherCategories;

import Link from "next/link";
import React from "react";
import { useAllProducts } from "../../context/products";

const OtherCategories = () => {
	const { allProducts } = useAllProducts();

	const count = allProducts.map((el) => el.category?.toLowerCase());

	const allCategoties = [...new Set(count)];

	return (
		<div className="p-4 py-10 md:py-20 md:px-32 mt-0 my-10">
			<h2 className="text-3xl font-bold mb-6 capitalize">
				Other categories
			</h2>

			<div className="">
				{allCategoties.map((el, i) => (
					<Link href={`/categories/${el}`} key={i}>
						<div className="flex justify-between items-center cursor-pointer border-b py-3 px-2 hover:bg-gray-100">
							<h3 className="font-semibold capitalize">{el}</h3>
							<span className="text-right text-sm font-medium">
								({count.filter((e) => e === el).length})
							</span>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default OtherCategories;

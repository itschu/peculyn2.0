import Link from "next/link";
import { useAllProducts } from "../../context/products";
import Options from "../options";
import { LoadingProduct } from "../products-row";
import Pagination from "../pagination/pagination";
import { useState } from "react";

const Shop = () => {
	const { allProducts } = useAllProducts();

	let max = 12;

	const [pageNumber, setPageNumber] = useState(0);

	let productPerPage = max;
	let productSeen = pageNumber * productPerPage;

	const pageCount = Math.ceil(allProducts.length / productPerPage);

	return (
		<div className="section">
			<span className="flex items-center">
				<Link href="/">
					<span className="link">Home</span>
				</Link>
				&nbsp;/&nbsp;
				<Link href="/shop">
					<span className="link"> Shop </span>
				</Link>
			</span>

			<div id="main-content" className="mt-11 grid sm:grid-cols-6 gap-1">
				<Options />
				<div className="sm:col-span-5 sm:ml-10">
					<div className="flex justify-between items-center">
						<p>
							Showing {productSeen + 1} -{" "}
							{max + productSeen < allProducts.length
								? max + productSeen
								: allProducts.length}{" "}
							of {allProducts.length || "0"} results
						</p>

						<div>
							<select className="option-input">
								<option>Default Sorting</option>
								<option>Sort by price: high to low</option>
								<option>Sort by price: low to high</option>
								<option>Sort by latest</option>
								<option>Sort by average rating</option>
								<option>Sort by popularity</option>
							</select>
						</div>
					</div>
					{allProducts.length > 5 ? (
						<div className="grid sm:grid-cols-4 gap-3 md:gap-6 mt-5">
							<Pagination
								max={max}
								pageNumber={pageNumber}
								setPageNumber={setPageNumber}
								productSeen={productSeen}
								pageCount={pageCount}
								productPerPage={productPerPage}
							/>
						</div>
					) : (
						<LoadingProduct cols={4} max={max} />
					)}
				</div>
			</div>
		</div>
	);
};

export default Shop;
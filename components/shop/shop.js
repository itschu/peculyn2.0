import Link from "next/link";
import { useAllProducts } from "../../context/products";
import Options from "../options";
import { LoadingProduct } from "../products-row";
import Pagination from "../pagination/pagination";
import { useEffect, useState } from "react";
import { useSearchProduct } from "../../context/search";

const Shop = ({ noOptions = false, search = false, category }) => {
	const { allProducts } = useAllProducts();
	const { searchProduct } = useSearchProduct();

	const [shopProducts, setShopProducts] = useState(
		search ? searchProduct : allProducts
	);

	let max = 12;

	const cols = noOptions ? 5 : 4;

	const [pageNumber, setPageNumber] = useState(0);

	let productPerPage = max;
	let productSeen = pageNumber * productPerPage;

	const pageCount = Math.ceil(shopProducts.length / productPerPage);

	useEffect(() => {
		if (category) {
			const newList = allProducts.filter(
				(el) => el.category.toLowerCase() === category
			);
			setShopProducts(newList);
			return;
		}
		setShopProducts(search ? searchProduct : allProducts);
	}, [allProducts, searchProduct]);

	const optionsProp = { shopProducts, setShopProducts, category };

	return (
		<div className="section">
			{noOptions || (
				<span className="flex items-center">
					<Link href="/" passHref>
						<span className="link">Home</span>
					</Link>
					&nbsp;/&nbsp;
					<Link href="/shop" passHref>
						<span className="link"> Shop </span>
					</Link>
					{category && (
						<>
							&nbsp;/&nbsp;
							<Link href="/shop" passHref>
								<span className="link capitalize">
									{category}
								</span>
							</Link>
						</>
					)}
				</span>
			)}
			<div
				id="main-content"
				className={`mt-11 grid ${noOptions || "sm:grid-cols-6"} gap-1`}
			>
				{noOptions || <Options {...optionsProp} />}
				<div className="sm:col-span-5 sm:ml-10">
					<div className="flex justify-between items-center">
						<p>
							Showing {productSeen + 1} -{" "}
							{max + productSeen < shopProducts.length
								? max + productSeen
								: shopProducts.length}{" "}
							of {shopProducts.length || "0"} results
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
					{allProducts.length > 1 ? (
						<Pagination
							max={max}
							pageNumber={pageNumber}
							setPageNumber={setPageNumber}
							productSeen={productSeen}
							pageCount={pageCount}
							productPerPage={productPerPage}
							shopProducts={shopProducts}
						/>
					) : (
						<LoadingProduct max={max} noPadd={true} />
					)}
				</div>
			</div>
		</div>
	);
};

export default Shop;

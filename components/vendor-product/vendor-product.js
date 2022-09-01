import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { useSelectedProduct } from "../../context/selectedProduct";
import { currencyFractionDigits, fileName, truncate } from "../../data";
import ErrorMsg from "../errorMsg/";
import SuccessMsg from "../successMsg";
import VendorMenu from "../vendor-menu";

const VendorProduct = ({ allVendorProducts, setLoading, setUploadStatus }) => {
	const { setSelectedProduct } = useSelectedProduct();
	const router = useRouter();

	const found = allVendorProducts.length > 0;

	let max = 5;

	const [pageNumber, setPageNumber] = useState(0);
	const [error, setError] = useState({ show: false, message: "" });
	const [success, setSuccess] = useState({ show: false, message: "" });
	const [products, setProducts] = useState(allVendorProducts);

	let productPerPage = max;
	let productSeen = pageNumber * productPerPage;

	const pageCount = Math.ceil(products.length / productPerPage);

	const changePage = ({ selected }) => {
		window.scrollTo({ top: 0, behavior: "smooth" });
		setPageNumber(selected);
	};

	const navigate = (obj, edit = false) => {
		setSelectedProduct(obj);
		if (edit) {
			router.push("/vendor/all-products/edit");
		} else {
			router.push(`/product/${obj.unique_key}`);
		}
	};

	const deleteProduct = async (obj) => {
		setLoading(true);
		setUploadStatus("Deleting product");
		setError({ show: false, message: "" });
		setSuccess({ show: false, message: "" });

		const id = obj.unique_key;

		try {
			const res = await fetch(
				`https://peculyn.online/api/v1/products/?id=${id}`,
				{
					method: "Delete",
					headers: {
						Accept: "application/json",
						Authorization: process.env.NEXT_PUBLIC_HOME_API,
					},
				}
			);
			const deleted = await res.json();
			if (deleted == "true") {
				setSuccess({
					show: true,
					message: "Product was deleted successfully",
				});

				const newProduct = products.filter(
					(el) => el.unique_key !== id
				);
				setProducts(newProduct);
			} else {
				setError({
					show: true,
					message:
						"Sorry an error occurred when deleting this product",
				});
			}
		} catch (e) {
			alert("please check your network connection");
		}

		setLoading(false);
		setUploadStatus(" ");

		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<div>
			<div className="section">
				<ErrorMsg error={error} setError={setError} />

				<SuccessMsg success={success} setSuccess={setSuccess} />

				<div
					id="main-content"
					className="md:mt-10 grid sm:grid-cols-6 gap-10 md:gap-0"
				>
					<VendorMenu />

					<div className="md:border-l md:pl-12 sm:col-span-5 sm:ml-10 w-full ">
						<h3 className="accountHeading">
							All Products ({found ? products.length : 0})
						</h3>

						{found && (
							<p>
								Showing {productSeen + 1} -{" "}
								{max + productSeen < products.length
									? max + productSeen
									: products.length}{" "}
								of {products.length || "0"} results
							</p>
						)}

						{found && (
							<div className="w-full overflow-x-auto table-overflow">
								<div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden mt-5">
									<table className="min-w-full leading-normal">
										<thead>
											<tr>
												<th className="th">Product</th>
												<th className="th">Price</th>
												<th className="th">Category</th>
												<th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-700 uppercase tracking-wider">
													Added
												</th>

												<th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-700 uppercase tracking-wider">
													Approved
												</th>

												<th className="th">View</th>

												<th className="th">Edit</th>

												<th className="th">Delete</th>
											</tr>
										</thead>
										<tbody>
											<>
												{products
													.slice(
														productSeen,
														productSeen +
															productPerPage
													)
													.map((el, i) => (
														<tr key={i}>
															<td className="table-td">
																<div className="flex items-center">
																	<div className="flex-shrink-0 w-10 h-10 relative bg-neutral-200">
																		<Image
																			src={`https://peculyn.online/assets/images/${el?.img_1.replace(
																				"../assets/images/",
																				""
																			)}`}
																			layout="fill"
																			alt=""
																		/>
																	</div>
																	<div className="ml-3 ">
																		<p className="text-gray-900 whitespace-no-wrap">
																			{truncate(
																				el.name,
																				14
																			)}
																		</p>
																	</div>
																</div>
															</td>
															<td className="table-td">
																<p className="text-gray-900 whitespace-no-wrap">
																	₦
																	{el.price.toLocaleString(
																		"en-US",
																		{
																			maximumFractionDigits:
																				currencyFractionDigits,
																		}
																	)}
																</p>
															</td>
															<td className="table-td">
																<p className="text-gray-900 whitespace-no-wrap">
																	{
																		el.category
																	}
																</p>
															</td>
															<td className="table-td">
																<p className="text-gray-900 whitespace-no-wrap">
																	{
																		el.date_added
																	}
																</p>
															</td>
															<td className="table-td ">
																<button
																	type="button"
																	className="inline-block text-gray-500 hover:text-gray-700 cursor-default"
																>
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		className={`h-4 w-4 ${
																			el?.approved
																				? "text-green-500"
																				: "text-gray-200"
																		}`}
																		viewBox="0 0 20 20"
																		fill="currentColor"
																	>
																		<path
																			fillRule="evenodd"
																			d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
																			clipRule="evenodd"
																		/>
																	</svg>
																</button>
															</td>
															<td className="table-td ">
																<button
																	type="button"
																	className="inline-block text-gray-500 hover:text-gray-700"
																	onClick={() =>
																		navigate(
																			el
																		)
																	}
																>
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		className="h-4 w-4"
																		fill="none"
																		viewBox="0 0 24 24"
																		stroke="currentColor"
																		strokeWidth={
																			2
																		}
																	>
																		<path
																			strokeLinecap="round"
																			strokeLinejoin="round"
																			d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
																		/>
																		<path
																			strokeLinecap="round"
																			strokeLinejoin="round"
																			d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
																		/>
																	</svg>
																</button>
															</td>
															<td className="table-td">
																<button
																	type="button"
																	className="inline-block text-gray-500 hover:text-gray-700"
																	onClick={() =>
																		navigate(
																			el,
																			true
																		)
																	}
																>
																	<svg
																		className="inline-block h-4 w-4 fill-current"
																		viewBox="0 0 24 24"
																	>
																		<path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
																	</svg>
																</button>
															</td>
															<td className="table-td">
																<button
																	type="button"
																	className="inline-block text-red-500 hover:text-red-700"
																	onClick={() =>
																		deleteProduct(
																			el
																		)
																	}
																>
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		className="h-4 w-4"
																		fill="none"
																		viewBox="0 0 24 24"
																		stroke="currentColor"
																		strokeWidth={
																			2
																		}
																	>
																		<path
																			strokeLinecap="round"
																			strokeLinejoin="round"
																			d="M6 18L18 6M6 6l12 12"
																		/>
																	</svg>
																</button>
															</td>
														</tr>
													))}
												{products.length < 1 && (
													<tr
														co
														className="px-5 py-5 border-b border-gray-200 bg-white "
													>
														<td colSpan={7}>
															<p className="text-center m-3 text-sm">
																No products
																found
															</p>
														</td>
													</tr>
												)}
											</>
										</tbody>
									</table>
								</div>
							</div>
						)}

						{found || (
							<div className="bg-secondary-400 px-3 md:px-10 py-5 text-white flex flex-col md:flex-row gap-3 md:gap-0 items-center justify-between">
								<p className="flex items-center gap-5">
									{" "}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth={2}
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
										/>
									</svg>{" "}
									You haven&apos;t added any product yet.
								</p>

								<Link passHref href={"/vendor/add"}>
									<button className="border py-2 px-4 rounded-2xl text-sm">
										{" "}
										Add Product
									</button>
								</Link>
							</div>
						)}

						{found && products.length > max && (
							<ReactPaginate
								previousLabel={"Previous"}
								nextLabel={"Next"}
								pageCount={pageCount}
								onPageChange={changePage}
								containerClassName={"pagination"}
								previousLinkClassName={"prevBtn"}
								nextLinkClassName={"nextBtn"}
								disabledClassName={"paginationDisabled"}
								activeClassName={"paginationActive"}
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default VendorProduct;

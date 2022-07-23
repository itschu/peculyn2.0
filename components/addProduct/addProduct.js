import { useState } from "react";
import { useSelectedProduct } from "../../context/selectedProduct";
import AddForm from "../add-form/";
import ErrorMsg from "../errorMsg/errorMsg";
import SuccessMsg from "../successMsg";
import VendorMenu from "../vendor-menu";

const empty = {
	productName: "",
	regPrice: "",
	price: "",
	weight: "",
	qty: "",
	shortDesc: "",
	longDesc: "",
	mainPicture: "",
	img_2: "",
	img_3: "",
	img_4: "",
};

const AddProduct = ({
	category,
	setLoading,
	setUploadStatus,
	edit = false,
	email,
}) => {
	const { selectedProduct } = useSelectedProduct();

	const [newProduct, setNewProduct] = useState(
		edit ? selectedProduct : empty
	);
	const [cate, setCate] = useState(edit ? selectedProduct.category : "");

	const [error, setError] = useState({ show: false, message: "" });
	const [success, setSuccess] = useState({ show: false, message: "" });

	const addNewProduct = async () => {
		setLoading(true);
		setError({ show: false, message: "" });
		setSuccess({ show: false, message: "" });

		//check if no category is selected
		if (cate == "") {
			setError({
				show: true,
				message: "Please select at least one category for this product",
			});

			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
			setLoading(false);
			return;
		}

		if (newProduct.qty == 0) {
			setError({
				show: true,
				message: "Stock quantity cannot be empty",
			});

			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
			setLoading(false);
			return;
		}

		//check main picture is not provided
		if (!newProduct.mainPicture) {
			if (!newProduct.img_1) {
				setError({
					show: true,
					message: "Please select an image for the product",
				});

				window.scrollTo({
					top: 0,
					behavior: "smooth",
				});
				setLoading(false);
				return;
			}
		}

		//check if file is too large
		if (
			newProduct?.mainPicture?.size / 1000000 > 5.5 ||
			newProduct?.img_2?.size / 1000000 > 5.5 ||
			newProduct?.img_3?.size / 1000000 > 5.5 ||
			newProduct?.img_4?.size / 1000000 > 5.5
		) {
			setError({
				show: true,
				message: "File is too large, maximum size allowed is 5mb",
			});

			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
			setLoading(false);
			return;
		}

		let formData = new FormData();
		if (newProduct.mainPicture) {
			formData.append(
				"file",
				newProduct.mainPicture,
				newProduct.mainPicture?.name
			);
		}

		let formData2 = new FormData();
		if (newProduct?.img_2 instanceof Blob)
			formData2.append("file", newProduct?.img_2, newProduct.img_2?.name);

		let formData3 = new FormData();
		if (newProduct?.img_3 instanceof Blob)
			formData3.append("file", newProduct?.img_3, newProduct.img_3?.name);

		let formData4 = new FormData();
		if (newProduct?.img_4 instanceof Blob)
			formData4.append("file", newProduct?.img_4, newProduct.img_4?.name);

		try {
			let img_res = newProduct?.img_1 || "";
			let img_res2 = newProduct?.img_2 || "";
			let img_res3 = newProduct?.img_3 || "";
			let img_res4 = newProduct?.img_4 || "";

			setUploadStatus(
				`uploading first image (${
					newProduct.mainPicture?.size / 1000000
				}mb) 20% complete`
			);
			if (newProduct?.mainPicture instanceof Blob) {
				img_res = await fetch(
					`https://peculyn.com/api/v1/products/upload/?category=${cate}`,
					{
						method: "POST",
						headers: {
							Accept: "application/json",
							Authorization: process.env.NEXT_PUBLIC_HOME_API,
						},
						body: formData,
					}
				);
			}

			setUploadStatus(
				`uploading second image (${
					newProduct.img_2?.size / 1000000
				}mb) 40% complete`
			);
			if (newProduct?.img_2 instanceof Blob) {
				img_res2 = await fetch(
					`https://peculyn.com/api/v1/products/upload/?category=${cate}`,
					{
						method: "POST",
						headers: {
							Accept: "application/json",
							Authorization: process.env.NEXT_PUBLIC_HOME_API,
						},
						body: formData2,
					}
				);
			}

			setUploadStatus(
				`uploading third image (${
					newProduct.img_3?.size / 1000000
				}mb) 60% complete`
			);
			if (newProduct?.img_3 instanceof Blob) {
				img_res3 = await fetch(
					`https://peculyn.com/api/v1/products/upload/?category=${cate}`,
					{
						method: "POST",
						headers: {
							Accept: "application/json",
							Authorization: process.env.NEXT_PUBLIC_HOME_API,
						},
						body: formData3,
					}
				);
			}

			setUploadStatus(
				`uploading fourth image (${
					newProduct.img_4?.size / 1000000
				}mb) 80% complete`
			);
			if (newProduct?.img_4 instanceof Blob) {
				img_res4 = await fetch(
					`https://peculyn.com/api/v1/products/upload/?category=${cate}`,
					{
						method: "POST",
						headers: {
							Accept: "application/json",
							Authorization: process.env.NEXT_PUBLIC_HOME_API,
						},
						body: formData4,
					}
				);
			}

			const imgRes =
				typeof img_res == "string" ? img_res : await img_res.json();
			const imgRes2 =
				typeof img_res2 == "string" ? img_res2 : await img_res2.json();
			const imgRes3 =
				typeof img_res3 == "string" ? img_res3 : await img_res3?.json();
			const imgRes4 =
				typeof img_res4 == "string" ? img_res4 : await img_res4?.json();

			setUploadStatus("uploading product data 90% complete");
			if (imgRes !== 1) {
				const compiledData = {
					unique_key: newProduct.unique_key,
					name: newProduct.productName || newProduct.name,
					price: newProduct.price,
					old_price: newProduct.regPrice || newProduct.old_price,
					short_desc: newProduct.shortDesc || newProduct.short_desc,
					category: cate,
					in_stock: newProduct.qty || newProduct.in_stock,
					long_desc: newProduct.longDesc || newProduct.long_desc,
					measurement: newProduct.weight || newProduct.measurement,
					email,
					img_1: imgRes,
					img_2: imgRes2 == 1 ? "" : imgRes2,
					img_3: imgRes3 === 1 ? "" : imgRes3,
					img_4: imgRes4 === 1 ? "" : imgRes4,
				};

				const res = await fetch(
					`https://peculyn.com/api/v1/products/`,
					{
						method: edit ? "PUT" : "POST",
						headers: {
							Accept: "application/json",
							"Content-Type": "application/json",
							Authorization: process.env.NEXT_PUBLIC_HOME_API,
						},
						body: JSON.stringify(compiledData),
					}
				);
				const response = await res.json();

				if (response == true) {
					setSuccess({
						show: true,
						message: `Product was ${
							edit ? "edited" : "added"
						} successfully`,
					});
					setNewProduct(empty);
					setCate("");
				} else {
					setError({
						show: true,
						message: `Sorry an error occured when ${
							edit ? "updating" : "uploading"
						} this product, please try again later or contact support`,
					});
				}
				setLoading(false);
			} else {
				setError({
					show: true,
					message: `Sorry an error occured when ${
						edit ? "updating" : "uploading"
					} this product, please try again later or contact support`,
				});

				window.scrollTo({
					top: 0,
					behavior: "smooth",
				});
				setLoading(false);
				setUploadStatus("");
				return;
			}
		} catch (e) {
			setLoading(false);
			alert("please check your network connection");
			console.log(e);
		}

		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});

		setUploadStatus("");
	};

	return (
		<div className="section">
			<ErrorMsg error={error} setError={setError} />

			<SuccessMsg success={success} setSuccess={setSuccess} />

			<div
				id="main-content"
				className="md:mt-10 grid sm:grid-cols-6 gap-10 md:gap-0"
			>
				<VendorMenu />

				<form
					onSubmit={(e) => {
						e.preventDefault();
						addNewProduct();
					}}
					encType="multipart/form-data"
					className="md:border-l md:pl-12 sm:col-span-5 sm:ml-10 "
				>
					{edit === true ? (
						<h3 className="accountHeading">
							Edit {newProduct.unique_key || "Product"}
						</h3>
					) : (
						<h3 className="accountHeading">Add Product</h3>
					)}

					{edit ? (
						newProduct.unique_key !== undefined ? (
							<AddForm
								newProduct={newProduct}
								setNewProduct={setNewProduct}
								category={category}
								cate={cate}
								setCate={setCate}
							/>
						) : (
							<div className="bg-secondary-400 px-3 md:px-10 py-5 text-white flex flex-col md:flex-row gap-3 md:gap-0 items-center justify-between">
								<p className="flex items-center gap-5">
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
											d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
										/>
									</svg>
									Please select a product to edit
								</p>
							</div>
						)
					) : (
						<AddForm
							newProduct={newProduct}
							setNewProduct={setNewProduct}
							category={category}
							cate={cate}
							setCate={setCate}
						/>
					)}
				</form>
			</div>
		</div>
	);
};

export default AddProduct;

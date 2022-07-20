import Upload from "../upload/";

const AddForm = ({ newProduct, setNewProduct, category, cate, setCate }) => {
	return (
		<>
			<div className="flex flex-col md:flex-row gap-10">
				<div className="w-full md:w-72">
					<Upload
						newProduct={newProduct}
						setNewProduct={setNewProduct}
					/>
					<div
						id="category"
						className="w-full border border-neutral-300 p-4"
					>
						<h4 className="font-bold mb-4">Select Category</h4>

						<div className="grid grid-cols-2 gap-2">
							{category.map((el, i) => {
								return (
									<div key={el[0]} className="col-span-1">
										<input
											type={"radio"}
											name="category"
											value={el[1]}
											onChange={(e) =>
												setCate(e.target.value)
											}
											checked={cate === el[1]}
										/>
										<label className="checkboxLablel">
											{el[1]}
										</label>
									</div>
								);
							})}
						</div>
					</div>
				</div>

				<div className="flex-grow">
					<div className="flex flex-col">
						<label>
							Product Name <span className="important">*</span>
						</label>
						<input
							type={"text"}
							className="input md:w-full"
							value={newProduct.productName || newProduct.name}
							name="product"
							onChange={(e) =>
								setNewProduct({
									...newProduct,
									productName: e.target.value,
								})
							}
							required
						/>
					</div>

					<div className="flex gap-7 mt-5">
						<div className="w-full">
							<label>Regular Price (₦) </label>
							<input
								type={"number"}
								className="input md:w-full"
								name="regular price"
								value={
									newProduct.regPrice || newProduct.old_price
								}
								onChange={(e) =>
									setNewProduct({
										...newProduct,
										regPrice: e.target.value,
									})
								}
							/>
						</div>

						<div className="w-full">
							<label>
								Sale Price (₦){" "}
								<span className="important">*</span>
							</label>
							<input
								type={"number"}
								className="input md:w-full"
								value={newProduct.price}
								name="sale product"
								onChange={(e) =>
									setNewProduct({
										...newProduct,
										price: e.target.value,
									})
								}
								required
							/>
						</div>
					</div>

					<div className="flex gap-7 mt-5">
						<div className="w-full">
							<label>Weight (kg) </label>
							<input
								type={"number"}
								className="input md:w-full"
								value={
									newProduct.weight || newProduct.measurement
								}
								name="weight"
								onChange={(e) =>
									setNewProduct({
										...newProduct,
										weight: e.target.value,
									})
								}
							/>
						</div>

						<div className="w-full">
							<label>
								Stock Quantity{" "}
								<span className="important">*</span>
							</label>
							<input
								type={"number"}
								className="input md:w-full"
								value={newProduct.qty || newProduct.in_stock}
								name="quantity"
								onChange={(e) =>
									setNewProduct({
										...newProduct,
										qty: e.target.value,
									})
								}
								required
							/>
						</div>
					</div>

					<div className="flex flex-col mt-5">
						<label>
							Short Description{" "}
							<span className="important">*</span>
						</label>
						<input
							type={"text"}
							className="input md:w-full"
							value={
								newProduct.shortDesc || newProduct.short_desc
							}
							name="short description"
							onChange={(e) =>
								setNewProduct({
									...newProduct,
									shortDesc: e.target.value,
								})
							}
							required
						/>
					</div>

					<div className="flex flex-col mt-5">
						<label>
							Long Description{" "}
							<span className="important">*</span>
						</label>
						<textarea
							className="input md:w-full"
							rows="14"
							style={{ minHeight: 200 }}
							value={newProduct.longDesc || newProduct.long_desc}
							name="long description"
							onChange={(e) =>
								setNewProduct({
									...newProduct,
									longDesc: e.target.value,
								})
							}
							required
						/>
					</div>
				</div>
			</div>

			<button
				type="submit"
				className="mt-7 px-6 py-2 bg-slate-700 text-white rounded-full font-bold"
			>
				Submit
			</button>
		</>
	);
};

export default AddForm;

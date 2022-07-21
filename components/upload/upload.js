import { fileName, truncate } from "../../data";

const Upload = ({ newProduct, setNewProduct }) => {
	const imgSvg = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="h-20 w-20"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			strokeWidth={2}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
			/>
		</svg>
	);

	const uploadSvg = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="h-20 w-20"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			strokeWidth={2}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
			/>
		</svg>
	);

	const imgSvg_sm = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="h-4 w-4"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			strokeWidth={2}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
			/>
		</svg>
	);

	const uploadSvg_sm = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="h-4 w-4"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			strokeWidth={2}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
			/>
		</svg>
	);

	let max = 30;

	return (
		<>
			<div className="w-full h-44 border border-neutral-300 mb-2 wrapper">
				<div className="file-upload">
					<input
						type="file"
						name="img_1"
						onChange={(e) => {
							const file = e.target.files;
							setNewProduct({
								...newProduct,
								mainPicture: file[0],
							});
						}}
					/>
					{newProduct.mainPicture || newProduct.img_1
						? imgSvg
						: uploadSvg}

					<div className="flex flex-col items-center">
						<p className="text-xl ml-2">
							{newProduct.mainPicture || newProduct.img_1
								? "Image Selected"
								: "Upload Image"}
						</p>
						<span className="text-sm">
							{newProduct.mainPicture
								? `( ${truncate(
										newProduct.mainPicture?.name,
										12
								  )} )`
								: `( ${truncate(
										fileName(newProduct.img_1),
										12
								  )} )`}
						</span>
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-1 mb-8 " id="other-images">
				<div className="flex items-center">
					<div className="w-12 h-12 bg-neutral-300 wrapper">
						<div className="file-upload">
							<input
								type="file"
								name="img_2"
								onChange={(e) => {
									const file = e.target.files;
									setNewProduct({
										...newProduct,
										img_2: file[0],
									});
								}}
							/>
							{newProduct.img_2 ? imgSvg_sm : uploadSvg_sm}
						</div>
					</div>
					<span className="text-sm ml-2">
						{newProduct.img_2
							? truncate(newProduct.img_2.name, max) ||
							  truncate(fileName(newProduct.img_2), max)
							: "No file chosen"}
					</span>
				</div>
				<div className="flex items-center">
					<div className="w-12 h-12 bg-neutral-300 wrapper">
						<div className="file-upload">
							<input
								type="file"
								name="img_3"
								onChange={(e) => {
									const file = e.target.files;
									setNewProduct({
										...newProduct,
										img_3: file[0],
									});
								}}
							/>
							{newProduct.img_3 ? imgSvg_sm : uploadSvg_sm}
						</div>
					</div>
					<span className="text-sm ml-2">
						{newProduct.img_3
							? truncate(newProduct.img_3.name, max) ||
							  truncate(fileName(newProduct.img_3), max)
							: "No file chosen"}
					</span>
				</div>

				<div className="flex items-center">
					<div className="w-12 h-12 bg-neutral-300 wrapper">
						<div className="file-upload">
							<input
								type="file"
								name="img_4"
								onChange={(e) => {
									const file = e.target.files;
									setNewProduct({
										...newProduct,
										img_4: file[0],
									});
								}}
							/>
							{newProduct.img_4 ? imgSvg_sm : uploadSvg_sm}
						</div>
					</div>
					<span className="text-sm ml-2">
						{newProduct.img_4
							? truncate(newProduct.img_4.name, max) ||
							  truncate(fileName(newProduct.img_4), max)
							: "No file chosen"}
					</span>
				</div>
			</div>
		</>
	);
};

export default Upload;

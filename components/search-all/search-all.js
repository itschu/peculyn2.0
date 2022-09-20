import Link from "next/link";
import { useEffect, useState } from "react";
import { useAllProducts } from "../../context/products";
import { useSearchProduct } from "../../context/search";

const SearchAll = () => {
	const [input, setInput] = useState("");
	const { allProducts } = useAllProducts();
	const { searchProduct, setSearchProduct } = useSearchProduct();

	const searchNow = async (e, inp) => {
		e === null ? setInput(inp) : e.preventDefault();
		const derived_input = e === null ? inp : input;

		const result =
			derived_input !== ""
				? allProducts.filter((el) =>
						el?.name
							?.toLowerCase()
							.includes(derived_input.toLowerCase())
				  )
				: [];

		setSearchProduct(result);
	};

	useEffect(() => {
		setSearchProduct([]);
	}, []);

	return (
		<div
			className="p-10 flex flex-col md:flex-row"
			style={{ backgroundColor: "#f4f4f4b3" }}
		>
			<span className="flex items-center">
				<Link passHref href="/">
					<span className="link">Home</span>
				</Link>
				&nbsp;/&nbsp;
				<Link passHref href="/shop">
					<span className="link"> Shop </span>
				</Link>
				&nbsp;/&nbsp;
				<Link passHref href="#">
					<span className="link"> {`Seacrh Products`} </span>
				</Link>
			</span>

			<div className="grow md:mx-20 mt-5 md:mt-0">
				<div className="flex items-center bg-white h-14 pl-4 rounded-xl overflow-hidden border">
					<input
						required
						value={input}
						onChange={(e) => searchNow(null, e.target.value)}
						className="bg-transparent outline-none flex-grow h-full w-full font-light tracking-wide pr-3"
						placeholder="Search product by name"
					/>
					<button
						type="submit"
						className="bg-slate-900 h-full flex items-center px-5 text-white"
					>
						{input.length < 1 ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-4 w-4 md:h-5 md:w-5 cursor-pointer"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
								onClick={searchNow}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								/>
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-4 w-4 md:h-5 md:w-5 cursor-pointer"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
								onClick={(e) => {
									e.preventDefault();
									searchNow(null, "");
								}}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						)}
					</button>
				</div>
			</div>
		</div>
	);
};

export default SearchAll;

import { useRouter } from "next/router";
import { useState } from "react";
import { useCart } from "../../context/cart";
import { useAllProducts } from "../../context/products";
import { useSelectedProduct } from "../../context/selectedProduct";
import { fileName } from "../../data";
import Product from "../product";
import ReactPaginate from "react-paginate";

const Pagination = ({
	setPageNumber,
	productSeen,
	pageCount,
	productPerPage,
}) => {
	const { allProducts } = useAllProducts();
	const { addToCart } = useCart();

	const router = useRouter();
	const { setSelectedProduct } = useSelectedProduct();

	const navigate = (obj) => {
		setSelectedProduct(obj);
		router.push(`/product/${obj.unique_key}`);
	};

	const changePage = ({ selected }) => {
		window.scrollTo({ top: 0, behavior: "smooth" });
		setPageNumber(selected);
	};

	const displayProducts = allProducts
		.slice(productSeen, productSeen + productPerPage)
		.map((el, i) => {
			const pic = `https://peculyn.com/assets/images/${
				el?.category
			}/${fileName(el?.img_1)}`;

			let showDiscount = false;
			let discount = 0;
			if (parseInt(el.old_price) <= parseInt(el.price)) {
				showDiscount = false;
			} else {
				showDiscount = true;
				const old_p = parseInt(el.old_price);
				const new_p = parseInt(el.price);
				discount = Math.round(((old_p - new_p) * 100) / old_p);
			}
			return (
				<Product
					el={el}
					i={i}
					navigate={navigate}
					addToCart={addToCart}
					discount={discount}
					pic={pic}
					showDiscount={showDiscount}
					key={i}
				/>
			);
		});

	return (
		<>
			{displayProducts}

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
		</>
	);
};

export default Pagination;

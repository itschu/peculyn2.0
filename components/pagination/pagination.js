import { useRouter } from "next/router";
import { useCart } from "../../context/cart";
import { useSelectedProduct } from "../../context/selectedProduct";
import { fileName } from "../../data";
import Product from "../product";
import ReactPaginate from "react-paginate";

const Pagination = ({
	setPageNumber,
	productSeen,
	pageCount,
	productPerPage,
	shopProducts,
	max,
}) => {
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

	const displayProducts = shopProducts
		.slice(productSeen, productSeen + productPerPage)
		.map((el, i) => {
			const pic = `https://peculyn.online/assets/images/${
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
			<div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mt-5">
				{displayProducts}
			</div>

			{shopProducts.length >= max && (
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
		</>
	);
};

export default Pagination;

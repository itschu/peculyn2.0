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
	const { cartState, setCartState } = useCart();

	const router = useRouter();
	const { setSelectedProduct } = useSelectedProduct();

	const navigate = (obj) => {
		setSelectedProduct(obj);
		router.push(`/product/${obj.unique_key}`);
	};

	const addToCart = async (el) => {
		const qty = 1;
		const prodDetails = {
			id: el.unique_key,
			price: el.price,
			total_price: qty * el.price,
			in_stock: el.in_stock,
			img_1: el.img_1,
			purchases: el.purchases,
			owner: el.owner,
			name: el.name,
			category: el.category,
			old_price: el.old_price,
			qty,
		};
		const exists = cartState.items.filter((itm) => itm.id == el.unique_key);

		if (exists.length) {
			let index = 0;
			for (let i = 0; i < cartState.items.length; i++) {
				if (cartState.items[i].id === el.unique_key) index = i;
			}

			const newQty = parseInt(exists[0].qty) + 1;
			const newItm = {
				...exists[0],
				qty: newQty,
				total_price: el.price * newQty,
			};
			cartState.items.splice(index, 1, newItm);
			setCartState({ visible: true, items: [...cartState.items] });
		} else {
			setCartState({
				visible: true,
				items: [...cartState.items, prodDetails],
			});
		}
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

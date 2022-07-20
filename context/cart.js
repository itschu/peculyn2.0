import React, { createContext, useContext, useState } from "react";
import { decodeHtml } from "../data";

const Cart = createContext();

const CartProvider = ({ children }) => {
	const [cartState, setCartState] = useState({ visible: false, items: [] });

	const increaseProducts = (i, el, addQty = 1) => {
		const newQty = parseInt(el.qty) + addQty;
		const newItm = { ...el, qty: newQty, total_price: el.price * newQty };
		cartState.items.splice(i, 1, newItm);
		setCartState({ vissible: true, items: [...cartState.items] });
	};

	const reduceProducts = (i, el) => {
		if (el.qty > 1) {
			const newQty = parseInt(el.qty) - 1;
			const newItm = {
				...el,
				qty: newQty,
				total_price: el.price * newQty,
			};

			cartState.items.splice(i, 1, newItm);
			setCartState({ ...cartState, items: [...cartState.items] });
		}
	};

	const addToCart = async (el, qty = 1) => {
		const prodDetails = {
			id: el.unique_key,
			price: el.price,
			total_price: qty * el.price,
			in_stock: el.in_stock,
			img_1: el.img_1,
			purchases: el.purchases,
			owner: el.owner,
			old_price: el.old_price,
			name: decodeHtml(el.name),
			category: el.category,
			qty,
		};
		const exists = cartState.items.filter((itm) => itm.id == el.unique_key);

		if (exists.length) {
			let index = 0;
			for (let i = 0; i < cartState.items.length; i++) {
				if (cartState.items[i].id === el.unique_key) index = i;
			}

			increaseProducts(index, exists[0], qty);
		} else {
			setCartState({
				visible: true,
				items: [...cartState.items, prodDetails],
			});
		}
	};

	return (
		<Cart.Provider
			value={{
				cartState,
				setCartState,
				addToCart,
				increaseProducts,
				reduceProducts,
			}}
		>
			{children}
		</Cart.Provider>
	);
};

const useCart = () => useContext(Cart);

export { CartProvider, useCart };

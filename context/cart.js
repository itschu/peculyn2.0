import React, { createContext, useContext, useEffect, useState } from "react";
import { decodeHtml } from "../data";

const Cart = createContext();

const CartProvider = ({ children }) => {
	let foundStorage = [];

	const [cartState, setCartState] = useState({
		visible: false,
		items: foundStorage,
	});

	const increaseProducts = (i, el, addQty = 1) => {
		const newQty = parseInt(el.qty) + addQty;
		const newItm = { ...el, qty: newQty, total_price: el.price * newQty };
		cartState.items.splice(i, 1, newItm);

		const storageReady = JSON.stringify([...cartState.items]);

		localStorage.setItem("cart-array", storageReady);

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

			const storageReady = JSON.stringify([...cartState.items]);

			localStorage.setItem("cart-array", storageReady);

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
			img_2: el.img_2,
			img_3: el.img_3,
			img_4: el.img_4,
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
			const storageReady = JSON.stringify([
				...cartState.items,
				prodDetails,
			]);

			localStorage.setItem("cart-array", storageReady);

			setCartState({
				visible: true,
				items: [...cartState.items, prodDetails],
			});
		}
	};

	const removeProduct = (id) => {
		const newCart = cartState.items.filter((itm) => itm.id !== id);

		const storageReady = JSON.stringify([...newCart]);

		localStorage.setItem("cart-array", storageReady);

		setCartState({
			...cartState,
			items: [...newCart],
		});
	};

	const emptyCart = () => {
		localStorage.setItem("cart-array", []);

		setCartState({
			...cartState,
			items: [],
		});
	};

	useEffect(() => {
		if (
			typeof Storage !== "undefined" &&
			localStorage.getItem("cart-array")
		) {
			foundStorage = localStorage.getItem("cart-array");
			foundStorage = JSON.parse(foundStorage);
			setCartState({
				visible: false,
				items: [...foundStorage],
			});
		}
	}, []);

	return (
		<Cart.Provider
			value={{
				cartState,
				setCartState,
				addToCart,
				increaseProducts,
				reduceProducts,
				removeProduct,
				emptyCart,
			}}
		>
			{children}
		</Cart.Provider>
	);
};

const useCart = () => useContext(Cart);

export { CartProvider, useCart };

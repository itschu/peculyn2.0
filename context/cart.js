import React, { createContext, useContext, useState } from "react";

const Cart = createContext();

const CartProvider = ({ children }) => {
	const [cartState, setCartState] = useState({ visible: false, items: [] });
	return (
		<Cart.Provider value={{ cartState, setCartState }}>
			{children}
		</Cart.Provider>
	);
};

const useCart = () => useContext(Cart);

export { CartProvider, useCart };

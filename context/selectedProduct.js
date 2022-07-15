import React, { createContext, useContext, useState } from "react";

const Selected = createContext();

const SelectedProductContext = ({ children }) => {
	const [selectedProduct, setSelectedProduct] = useState({});
	return (
		<Selected.Provider value={{ selectedProduct, setSelectedProduct }}>
			{children}
		</Selected.Provider>
	);
};

const useSelectedProduct = () => useContext(Selected);

export { SelectedProductContext, useSelectedProduct };

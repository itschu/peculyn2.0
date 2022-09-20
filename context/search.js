import React, { createContext, useContext, useState } from "react";

const Search = createContext();

const SearchContext = ({ children }) => {
	const [searchProduct, setSearchProduct] = useState([]);
	return (
		<Search.Provider value={{ searchProduct, setSearchProduct }}>
			{children}
		</Search.Provider>
	);
};

const useSearchProduct = () => useContext(Search);

export { SearchContext, useSearchProduct };

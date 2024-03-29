import React, { createContext, useContext, useEffect, useState } from "react";

const Products = createContext();

const AllProductsContext = ({ children }) => {
	const [allProducts, setAllProducts] = useState([]);

	const get_goods = async () => {
		let products = [];

		try {
			const res = await fetch(
				`https://peculyn.online/api/v1/products/?amount=150`,
				{
					method: "Get",
					headers: {
						Accept: "application/json",
						Authorization: process.env.NEXT_PUBLIC_HOME_API,
					},
				}
			);
			products = await res.json();
		} catch (e) {
			alert("please check your network connection");
		}

		// const verified = products.filter((el) => el?.approved == "yes");
		const verified = products;
		setAllProducts(verified);
	};

	useEffect(() => {
		get_goods();
	}, []);

	return (
		<Products.Provider value={{ allProducts, setAllProducts }}>
			{children}
		</Products.Provider>
	);
};

const useAllProducts = () => useContext(Products);

export { AllProductsContext, useAllProducts };

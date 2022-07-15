import React, { createContext, useContext, useState } from "react";

const Products = createContext();

const staleData = [
	{
		sn: "17",
		unique_key: "n365209574626cd317863a9379573174",
		name: "Chicken Gizzard",
		price: "2000.00",
		old_price: "2150.00",
		short_desc: "sd",
		category: "protein",
		in_stock: "100000",
		img_1: "../assets/images/protein/gizzard.png",
		img_2: "../assets/images/protein/gizzard2.png",
		img_3: "../assets/images/protein/gizzard3.png",
		img_4: "../assets/images/protein/gizzard.png",
		img_5: "../assets/images/protein/gizzard2.png",
		long_desc: "ld",
		reviews: "1",
		purchases: "0",
		date_added: "8/05/2021",
		measurement: "Kg",
		owner: "",
	},
	{
		sn: "20",
		unique_key: "n093j32j2309u238u32010912",
		name: "Broiler",
		price: "1700.00",
		old_price: "1950.00",
		short_desc: "sd",
		category: "protein",
		in_stock: "1000000",
		img_1: "../assets/images/protein/chicken-wing.png",
		img_2: "../assets/images/protein/broiler.png",
		img_3: "../assets/images/protein/broiler.png",
		img_4: "../assets/images/protein/broiler.png",
		img_5: "../assets/images/protein/broiler.png",
		long_desc: "ld",
		reviews: "1",
		purchases: "0",
		date_added: "8/05/2021",
		measurement: "Kg",
		owner: "",
	},
	{
		sn: "41",
		unique_key: "19178437976297f856eb2699.26501037",
		name: "PV-HT320 sound system",
		price: "1000.00",
		old_price: "5000.00",
		short_desc: "Polystar 5 inch USB, Bluetooth, HDMI home theatre",
		category: "electronics",
		in_stock: "2",
		img_1: "",
		img_2: "",
		img_3: "",
		img_4: "",
		img_5: "",
		long_desc: "Polystar 5 inch USB, Bluetooth, HDMI home theatre",
		reviews: "1",
		purchases: "0",
		date_added: "01/06/2022",
		measurement: "nil",
		owner: "",
	},
	{
		sn: "40",
		unique_key: "n18574560756296331ab4ee0920763185",
		name: "PV-861-5.1",
		price: "76000.00",
		old_price: "80000.00",
		short_desc: "All round perfect refined sound with DVD",
		category: "electronics",
		in_stock: "4",
		img_1: "../assets/images/electronics/WhatsApp Image 2022-04-04 at 9.10.21 AM.jpeg",
		img_2: "../assets/images/electronics/WhatsApp Image 2022-04-04 at 9.10.21 AM.jpeg",
		img_3: "../assets/images/electronics/WhatsApp Image 2022-04-04 at 9.10.21 AM.jpeg",
		img_4: "../assets/images/electronics/WhatsApp Image 2022-04-04 at 9.10.21 AM.jpeg",
		img_5: "../assets/images/electronics/WhatsApp Image 2022-04-04 at 9.10.21 AM.jpeg",
		long_desc: "All round perfect refined sound with DVD",
		reviews: "1",
		purchases: "0",
		date_added: "31/05/2022",
		measurement: "nil",
		owner: "itchubusiness+swift2@gmail.com",
	},
	{
		sn: "19",
		unique_key: "n09823iqwjsioei893398373c",
		name: "Chicken Gizzard",
		price: "2000.00",
		old_price: "2150.00",
		short_desc: "sd",
		category: "protein",
		in_stock: "100000",
		img_1: "../assets/images/protein/turkey.png",
		img_2: "../assets/images/protein/gizzard2.png",
		img_3: "../assets/images/protein/gizzard3.png",
		img_4: "../assets/images/protein/gizzard.png",
		img_5: "../assets/images/protein/gizzard2.png",
		long_desc: "ld",
		reviews: "1",
		purchases: "0",
		date_added: "8/05/2021",
		measurement: "Kg",
		owner: "",
	},
];

const AllProductsContext = ({ children }) => {
	const [allProducts, setAllProducts] = useState(staleData);
	return (
		<Products.Provider value={{ allProducts, setAllProducts }}>
			{children}
		</Products.Provider>
	);
};

const useAllProducts = () => useContext(Products);

export { AllProductsContext, useAllProducts };

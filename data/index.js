export const project = {
	title: "Peculyn Superstores",
};

export const categories = [
	{
		id: 1,
		title: "men's wear",
		link: "categories/men",
		img1: "/images/p2.jpeg",
		img2: "/images/p3.jpeg",
	},
	{
		id: 2,
		title: "women's wear",
		link: "categories/women",
		img1: "/images/p2.jpeg",
		img2: "/images/p3.jpeg",
	},
	{
		id: 3,
		title: "unisex accessories",
		link: "categories/unisex",
		img1: "/images/p2.jpeg",
		img2: "/images/p3.jpeg",
	},
	{
		id: 4,
		title: "children wear",
		link: "categories/children",
		img1: "/images/p2.jpeg",
		img2: "/images/p3.jpeg",
	},
	{
		id: 5,
		title: "electronics",
		link: "categories/electronics",
		img1: "/images/p2.jpeg",
		img2: "/images/p3.jpeg",
	},
	{
		id: 6,
		title: "hair",
		link: "categories/hair",
		img1: "/images/p2.jpeg",
		img2: "/images/p3.jpeg",
	},
	{
		id: 7,
		title: "phone accessories",
		link: "categories/phone-accessories",
		img1: "/images/p2.jpeg",
		img2: "/images/p3.jpeg",
	},
	{
		id: 8,
		title: "phones",
		link: "categories/phones",
		img1: "/images/p2.jpeg",
		img2: "/images/p3.jpeg",
	},
	{
		id: 9,
		title: "laptops",
		link: "categories/laptops",
		img1: "/images/p2.jpeg",
		img2: "/images/p3.jpeg",
	},
	{
		id: 10,
		title: "bags",
		link: "categories/bags",
		img1: "/images/p2.jpeg",
		img2: "/images/p3.jpeg",
	},
	{
		id: 11,
		title: "foods",
		link: "categories/foods",
		img1: "/images/p2.jpeg",
		img2: "/images/p3.jpeg",
	},
	{
		id: 12,
		title: "cosmetics",
		link: "categories/cosmetics",
		img1: "/images/p2.jpeg",
		img2: "/images/p3.jpeg",
	},
	{
		id: 13,
		title: "grocries",
		link: "categories/grocries",
		img1: "/images/p2.jpeg",
		img2: "/images/p3.jpeg",
	},
];

export const decodeHtml = (html) => {
	var txt = document.createElement("textarea");
	txt.innerHTML = html;
	return txt.value;
};

export const naira = Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "NGN",
	useGrouping: false,
	maximumSignificantDigits: 3,
});

export const currencyFractionDigits = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "NGN",
}).resolvedOptions().maximumFractionDigits;

export const fileName = (file) => {
	if (file === undefined) return;
	return file.replace(/^.*[\\\/]/, "");
};

export const capitalizeFirstLetter = (string) => {
	return string.charAt(0).toUpperCase() + string.slice(1);
};

export const staleData = {
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
	stale: true,
};

export const truncate = (input, limit = 15) => {
	if (input) {
		return input.length > limit ? `${input.substring(0, limit)}...` : input;
	} else return input;
};

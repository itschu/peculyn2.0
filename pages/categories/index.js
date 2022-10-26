import { useCart } from "../../context/cart";
import Footer from "../../components/footer";
import Nav from "../../components/nav";
import Newsletter from "../../components/newsletter";
import HtmlHead from "../../components/head";
import Cart from "../../components/cart";
import TopCategory from "../../components/top-cat";
import HeroBottom from "../../components/hero-bottom";
import OtherCategories from "../../components/other-categories";

const Categories = () => {
	const { cartState } = useCart();

	return (
		<div
			className={`font-body bg-white text-gray-700 ${
				cartState.visible === true && "overflow-hidden "
			}`}
		>
			<HtmlHead currentPage={`Categories`} order={"reverse"} />
			<Nav />
			<div className="-mt-10">
				<TopCategory />
			</div>
			<HeroBottom />
			<OtherCategories />
			<Newsletter />
			<Footer />
			<Cart />
		</div>
	);
};

export default Categories;

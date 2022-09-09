import Image from "next/image";
import Link from "next/link";

const arr = [
	"design/chair.jpg",
	"design/woman-trend.jpg",
	"design/watch.jpg",
	"design/laptop.jpg",
];
const TopCategory = () => {
	return (
		<div
			className="p-4 py-10 md:py-20 md:px-32 mt-10 my-10"
			style={{ backgroundColor: "#f4f4f4" }}
		>
			<div className="">
				<h2 className="text-3xl font-bold mb-6 capitalize">
					Top trending categories
				</h2>
				<div className="grid sm:grid-cols-4 gap-3 md:gap-5 border-t pt-10 ">
					<div
						className="trend-card w-full h-64 col-span-1 bg-white overflow-hidden  relative transition duration-150 transform hover:scale-105"
						style={{
							backgroundImage: `url(/images/${arr[0]})`,
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
					>
						<h3 className="trend-heading">
							Interior &amp; Furniture
						</h3>

						<Link href={""} passHref>
							<p className="linkText">Home Theater</p>
						</Link>
						<Link href={""} passHref>
							<p className="linkText">Chairs</p>
						</Link>
						<Link href={""} passHref>
							<p className="linkText">Television</p>
						</Link>
						<Link href={""} passHref>
							<p className="linkText">Speakers</p>
						</Link>
						<Link href={""} passHref>
							<p className="linkText">Tables</p>
						</Link>
					</div>

					<div
						className="trend-card w-full h-64 col-span-1 bg-white overflow-hidden  relative transition duration-150 transform hover:scale-105"
						style={{
							backgroundImage: `url(/images/${arr[1]})`,
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
					>
						<h3 className="trend-heading">
							Fashion &amp; Clothing
						</h3>

						<Link href={""} passHref>
							<p className="linkText">Men&apos;s Wear</p>
						</Link>
						<Link href={""} passHref>
							<p className="linkText">Women&apos;s Wear</p>
						</Link>
						<Link href={""} passHref>
							<p className="linkText">Bags</p>
						</Link>
						<Link href={""} passHref>
							<p className="linkText">Childrens Wear</p>
						</Link>
						<Link href={""} passHref>
							<p className="linkText">Shoes</p>
						</Link>
					</div>

					<div
						className="trend-card w-full h-64 col-span-1 bg-white overflow-hidden relative transition duration-150 transform hover:scale-105"
						style={{
							backgroundImage: `url(/images/${arr[2]})`,
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
					>
						<h3 className="trend-heading">Jewelry &amp; Watch</h3>

						<Link href={""} passHref>
							<p className="linkText">Accessories</p>
						</Link>
						<Link href={""} passHref>
							<p className="linkText">Designer Watch</p>
						</Link>
						<Link href={""} passHref>
							<p className="linkText">Smart Watch</p>
						</Link>
						<Link href={""} passHref>
							<p className="linkText">Jewelry</p>
						</Link>
						<Link href={""} passHref>
							<p className="linkText">Belts</p>
						</Link>
					</div>

					<div
						className="trend-card w-full h-64 col-span-1 bg-white overflow-hidden relative transition duration-150 transform hover:scale-105 "
						style={{
							backgroundImage: `url(/images/${arr[3]})`,
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
					>
						<h3 className="trend-heading">Tech &amp; Gadgets</h3>

						<Link href={""} passHref>
							<p className="linkText">Phones</p>
						</Link>
						<Link href={""} passHref>
							<p className="linkText">Laptops</p>
						</Link>
						<Link href={""} passHref>
							<p className="linkText">Accessories</p>
						</Link>
						<Link href={""} passHref>
							<p className="linkText">Tablets</p>
						</Link>
						<Link href={""} passHref>
							<p className="linkText">Desktop</p>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopCategory;

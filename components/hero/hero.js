import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { categories } from "../../data";

const slides = [
	{
		eachSlide: `url(${process.env.NEXT_PUBLIC_DOMAIN}/assets/images/accessories.jpg)`,
	},
	// {
	// 	eachSlide: `url(${process.env.NEXT_PUBLIC_DOMAIN}/assets/images/design/main2.png)`,
	// },
	// {
	// 	eachSlide: `url(${process.env.NEXT_PUBLIC_DOMAIN}/assets/images/design/main3.png)`,
	// },
	// {
	// 	eachSlide: `url(${process.env.NEXT_PUBLIC_DOMAIN}/assets/images/design/main1.png)`,
	// },
	// {
	// 	eachSlide: `url(${process.env.NEXT_PUBLIC_DOMAIN}/assets/images/design/main2.png)`,
	// },
	// {
	// 	eachSlide: `url(${process.env.NEXT_PUBLIC_DOMAIN}/assets/images/design/main3.png)`,
	// },
];

const Hero = () => {
	const [active, setActive] = useState(0);
	const [autoplay, setAutoplay] = useState(true);
	const max = slides.length;

	const intervalBetweenSlides = () =>
		autoplay && setActive(active === max - 1 ? 0 : active + 1);

	useEffect(() => {
		const interval = setInterval(() => intervalBetweenSlides(), 3000);
		return () => clearInterval(interval);
	});

	const toggleAutoPlay = () => setAutoplay(!autoplay);

	const nextOne = () => active < max - 1 && setActive(active + 1);

	const prevOne = () => active > 0 && setActive(active - 1);

	const isActive = (value) => active === value && "active";

	const setSliderStyles = () => {
		const transition = active * -100;

		return {
			width: slides.length * 100 + "vw",
			transform: "translateX(" + transition + "vw)",
		};
	};

	const renderSlides = () =>
		slides.map((item, index) => (
			<div
				className="each-slide"
				key={index}
				style={{
					background: `linear-gradient(rgba(0, 0, 0, 0.67), rgb(0, 0, 0, 0.67)), ${item.eachSlide}`,
					backgroundPosition: "top",
					// backgroundSize: "cover",
					backgroundRepeat: "repeat",
					// backgroundColor: "#fff",
				}}
				url={item.eachSlide}
			>
				<h1>Welcome to Peculyn Super Stores</h1>
			</div>
		));

	const renderDots = () =>
		slides.map(
			(
				silde,
				index // check index
			) => (
				<li className={isActive(index) + " dots"} key={index}>
					<button onClick={() => setActive(index)}>
						<span>&#9679;</span>
					</button>
				</li>
			)
		);

	const renderPlayStop = () =>
		autoplay ? (
			<svg fill="#0000005d" height="24" viewBox="0 0 24 24" width="24">
				<path d="M0 0h24v24H0z" fill="none" />
				<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
			</svg>
		) : (
			<svg fill="#0000005d" height="24" viewBox="0 0 24 24" width="24">
				<path d="M0 0h24v24H0z" fill="none" />
				<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
			</svg>
		);

	const renderArrows = () => (
		<>
			<button
				type="button"
				className="arrows prev"
				onClick={() => prevOne()}
			>
				<svg fill="#fff" width="50" height="50" viewBox="0 0 24 24">
					<path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
					<path d="M0 0h24v24H0z" fill="none" />
				</svg>
			</button>
			<button
				type="button"
				className="arrows next"
				onClick={() => nextOne()}
			>
				<svg fill="#fff" height="50" viewBox="0 0 24 24" width="50">
					<path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
					<path d="M0 0h24v24H0z" fill="none" />
				</svg>
			</button>
		</>
	);
	return (
		<div className="grid lg:grid-cols-3 md:grid-cols-4 h-min w-full bg-neutral-100 relative">
			<div className="slider md:col-span-2 bg-gray-500">
				<div className="wrapper relative" style={setSliderStyles()}>
					{renderSlides()}
				</div>

				{renderArrows()}
				<ul className="dots-container">{renderDots()}</ul>
				<button
					type="button"
					className="toggle-play"
					onClick={toggleAutoPlay}
				>
					{renderPlayStop()}
				</button>
			</div>

			<div className="lg:col-span-1 sm:p-1 pb-0 md:col-span-2 mt-2">
				<h2 className="ml-6 font-bold text-2xl mt-3">
					Top Categories.
				</h2>
				{categories.map((el, i) => {
					if (i > 4) return;
					return (
						<div className="hero-category capitalize" key={el.id}>
							<div className="w-52 h-16 relative hidden md:block">
								<Image
									src={el.img1}
									layout="fill"
									className="object-left-top object-cover"
									alt={`${el.title} category image`}
								/>
							</div>
							<div className=" h-16 w-full md:h-full flex items-center justify-between mx-4 text-base sm:text-sm">
								<h3>{el.title}</h3>

								<Link passHref href={el.link}>
									<div className="flex items-center cursor-pointer hover:text-primary-800 font-normal transition duration-150 lowercase">
										<span>shop now</span>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-4 w-4 ml-1 "
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
												clipRule="evenodd"
											/>
										</svg>
									</div>
								</Link>
							</div>
						</div>
					);
				})}

				<div className="flex pt-4 md:pt-4 mb-6">
					<Link passHref href={"/categories"}>
						<button className="text-sm border hover:border-primary-600 border-slate-600 text-slate-600 m-auto p-2 rounded-full bg-transparent px-4 hover:bg-primary-600 hover:text-white transition duration-300 ease-linear hover:font-medium">
							View all categories
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Hero;

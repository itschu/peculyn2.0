import Image from "next/image";
import Link from "next/link";
import { categories } from "../../data";

const hero = () => {
	return (
		<div className="grid lg:grid-cols-3 md:grid-cols-4 h-min w-full bg-neutral-100">
			<div
				className="md:col-span-2 bg-gray-500"
				style={{
					backgroundImage: "url(/images/design/hero.png)",
					backgroundPosition: "center",
					backgroundSize: "cover",
				}}
			></div>

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
									src={`/images/p${i + 6}.jpeg`}
									layout="fill"
									className="object-left-top object-cover"
									alt={`${el.title} category image`}
								/>
							</div>
							<div className=" h-16 w-full md:h-full flex items-center justify-between mx-4 text-base sm:text-sm">
								<h3>{el.title}</h3>

								<Link href={el.link}>
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
					<Link href={"/categories"}>
						<button className="text-sm border hover:border-primary-600 border-slate-600 text-slate-600 m-auto p-2 rounded-full bg-transparent px-4 hover:bg-primary-600 hover:text-white transition duration-300 ease-linear hover:font-medium">
							View all categories
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default hero;

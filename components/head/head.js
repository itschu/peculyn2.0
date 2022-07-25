import Head from "next/head";
import { project } from "../../data";

const HtmlHead = ({ currentPage, order = "normal" }) => {
	return (
		<Head>
			<title>
				{order == "reverse"
					? `${currentPage} | ${project.title}`
					: `${project.title} | ${currentPage}`}
			</title>
			<meta name="description" content={project.descContent} />
			<link
				rel="icon"
				href="/images/design/logo.png"
				type="image/x-icon"
			/>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
			/>
			<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
			<meta
				name="keyword"
				content="peculyn, peculyn super stores, peculyn superstores, peculyn international super stores, 'super store', online shopping, peculyn international superstores, peculyn stores, international super stores, 'international store', 'Shop online', 'Nigeria shopping', 'sell products',buy online, 'top online store', 'buy on peculyn'"
			/>
		</Head>
	);
};

export default HtmlHead;

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
		</Head>
	);
};

export default HtmlHead;

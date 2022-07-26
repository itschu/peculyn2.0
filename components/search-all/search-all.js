import Link from "next/link";

const SearchAll = () => {
	return (
		<div className="section">
			<span className="flex items-center">
				<Link passHref href="/">
					<span className="link">Home</span>
				</Link>
				&nbsp;/&nbsp;
				<Link passHref href="/shop">
					<span className="link"> Shop </span>
				</Link>
				&nbsp;/&nbsp;
				<Link passHref href="/shop">
					<span className="link"> ..... </span>
				</Link>
			</span>
		</div>
	);
};

export default SearchAll;

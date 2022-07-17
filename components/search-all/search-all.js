import Link from "next/link";

const SearchAll = () => {
	return (
		<div className="section">
			<span className="flex items-center">
				<Link href="/">
					<span className="link">Home</span>
				</Link>
				&nbsp;/&nbsp;
				<Link href="/shop">
					<span className="link"> Shop </span>
				</Link>
				&nbsp;/&nbsp;
				<Link href="/shop">
					<span className="link"> ..... </span>
				</Link>
			</span>
		</div>
	);
};

export default SearchAll;

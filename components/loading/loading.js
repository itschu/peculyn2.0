const Loading = ({ uploadStatus, loading }) => {
	let useLoading;
	if (loading === undefined) {
		useLoading = false;
	} else {
		useLoading = loading;
	}

	const zindex = useLoading ? 1000 : -1;

	return (
		<div
			className={`fixed left-0 top-0 bottom-0 right-0 flex items-center justify-center flex-col gap-5 ${
				useLoading ? "opacity-100" : "opacity-0"
			} transition-all duration-300`}
			style={{ zIndex: zindex, backgroundColor: "#0000009d" }}
		>
			<div className="lds-roller">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
			<p className="font-semibold text-white">{uploadStatus}... </p>
		</div>
	);
};

export default Loading;

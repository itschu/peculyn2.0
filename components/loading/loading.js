const Loading = ({ uploadStatus }) => {
	return (
		<div
			className="fixed left-0 top-0 bottom-0 right-0 flex items-center justify-center flex-col gap-5"
			style={{ zIndex: 101, backgroundColor: "#0000009d" }}
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

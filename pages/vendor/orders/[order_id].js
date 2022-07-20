const SingleOrder = () => {
	return <div>SingleOrder</div>;
};

export default SingleOrder;

export async function getServerSideProps(context) {
	return {
		props: {}, // Will be passed to the page component as props
	};
}

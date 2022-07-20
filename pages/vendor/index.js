import Dashboard from "../account/dashboard";

const Index = () => {
	return <Dashboard user={"vendor"} />;
};

export default Index;

export async function getServerSideProps(context) {
	return {
		props: {}, // Will be passed to the page component as props
	};
}

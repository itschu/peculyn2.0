import Dashboard from "./dashboard";

const Index = () => {
	return <Dashboard />;
};

export default Index;

export async function getServerSideProps(context) {
	return {
		props: {}, // Will be passed to the page component as props
	};
}

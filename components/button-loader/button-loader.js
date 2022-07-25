import styles from "../../styles/Cart.module.css";

const ButtonLoader = () => {
	return (
		<div className={styles.ldsEllipsis}>
			<div className="bg-gray-700 group-hover:bg-white"></div>
			<div className="bg-gray-700 group-hover:bg-white"></div>
			<div className="bg-gray-700 group-hover:bg-white"></div>
			<div className="bg-gray-700 group-hover:bg-white"></div>
		</div>
	);
};

export default ButtonLoader;

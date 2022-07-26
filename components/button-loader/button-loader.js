import styles from "../../styles/Cart.module.css";

const ButtonLoader = ({ color = "bg-gray-700", active = "bg-white" }) => {
	return (
		<div className={styles.ldsEllipsis}>
			<div className={`${color} group-hover:${active}`}></div>
			<div className={`${color} group-hover:${active}`}></div>
			<div className={`${color} group-hover:${active}`}></div>
			<div className={`${color} group-hover:${active}`}></div>
		</div>
	);
};

export default ButtonLoader;

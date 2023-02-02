import React from "react";
import styles from "./styles.module.css";

const Button = (props: any) => {
	return (
		<button className={styles.button} onClick={props.onClick} disabled={!props.enableSwap}>
			{props.children}
		</button>
	);
};

export default Button;

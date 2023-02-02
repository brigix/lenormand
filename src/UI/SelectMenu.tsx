import React from "react";
import styles from "./styles.module.css";
const SelectMenu = ({
	label,
	arr,
	handleSelection,
}: {
	label: string;
	arr: Array<{ key: string; card: string }>;
	handleSelection: any;
}) => {
	return (
        <div className={styles.selectMenu}>
			<label htmlFor="cards">{label}</label>
			<div className={`${styles[`select`]}`} >
                <select name="cards" id="cards" onChange={handleSelection}>
                   <option value="" selected disabled hidden>Pasirinkite...</option>
					{arr.map((element: { key: string; card: string }) => (
						<option key={element.key} value={element.key}>
							{element.key}.{element.card}
						</option>
					))}
				</select>
				<span className="focus"></span>
			</div>
		</div>
	);
};

export default SelectMenu;

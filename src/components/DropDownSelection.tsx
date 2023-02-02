import React from "react";
import Wrapper from "../helpers/Wrapper";
import SelectMenu from "../UI/SelectMenu";

const DropDownSelection = ({
	label,
	arr,
	handleSelection,
}: {
	label: string;
	arr: Array<{ key: string; card: string }>;
	handleSelection: any;
}) => {
	return (
		<Wrapper>
			<SelectMenu label={label} arr={arr} handleSelection={handleSelection} />
		</Wrapper>
	);
};

export default DropDownSelection;

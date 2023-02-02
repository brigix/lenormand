import React from "react";
import Button from "./Button";
import ResponsiveWrapper from "./ResponsiveWrapper";

const Panel = () => {
	return (
        <ResponsiveWrapper>
			<Button>Reikšmė</Button>
			<Button>Kombinacija</Button>
		</ResponsiveWrapper>
	);
};

export default Panel;

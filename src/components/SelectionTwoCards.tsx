import React, { useEffect, useState } from "react";
import cardsArr from "../assets/lenormand_combinations.json";
import Button from "../UI/Button";
import ResponsiveWrapper from "../UI/ResponsiveWrapper";
import SelectMenu from "../UI/SelectMenu";
import SwapIcon from "../UI/SwapIcon";

const SelectionTwoCards = (props: any) => {
	const { selectCardCombination } = props;
	const [selectedFirstCard, setSelectedFirstCard] = useState<string>();
	const [selectedSecondCard, setSelectedSecondCard] = useState<string>();
	const [filteredFirstCardsArr, setFilteredFirstCardsArr] =
		useState<Array<any>>(cardsArr);
	const [filteredSecondCardsArr, setFilteredSecondCardsArr] =
		useState<Array<any>>(cardsArr);
	const [enableSwap, setEnableSwap] = useState<boolean>(false);

	useEffect(() => {
		selectCardCombination(selectedFirstCard, selectedSecondCard);
		if (selectedFirstCard !== undefined && selectedSecondCard !== undefined) {
			setEnableSwap(true);
		}
	}, [selectedFirstCard, selectedSecondCard]);

	const handleFirstSelection = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		const selectedCard = event.target.value;
		setSelectedFirstCard(selectedCard);
		setFilteredSecondCardsArr(
			cardsArr.filter((card) => card.key !== selectedCard)
		);
	};
	const handleSecondSelection = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		const selectedCard = event.target.value;
		setSelectedSecondCard(selectedCard);
		setFilteredFirstCardsArr(
			cardsArr.filter((card) => card.key !== selectedCard)
		);
	};

	const onSwap = (e: any) => {
		const card1 = selectedFirstCard;
		const card2 = selectedSecondCard;
		console.log(card1, card2);
		setSelectedFirstCard(card2);
		setSelectedSecondCard(card1);
		//setFilteredSecondCardsArr(cardsArr.filter((card) => card.key !== card1));
		//setFilteredFirstCardsArr(cardsArr.filter((card) => card.key !== card2));
	};

	return (
		<ResponsiveWrapper>
			<SelectMenu
				label="Pirma korta: "
				arr={filteredFirstCardsArr}
				handleSelection={handleFirstSelection}
			/>
			<Button onClick={onSwap} enableSwap={enableSwap}>
				<SwapIcon color={enableSwap ? "coral" : "gray"} size={50} />
			</Button>
			<SelectMenu
				label="Antra korta: "
				arr={filteredSecondCardsArr}
				handleSelection={handleSecondSelection}
			/>
		</ResponsiveWrapper>
	);
};

export default SelectionTwoCards;

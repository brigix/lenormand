import React, { useEffect, useState } from "react";
import SelectionTwoCards from "./SelectionTwoCards";
import cardsArr from "../assets/lenormand_combinations.json";
import { CardType } from "../helpers/Types";
import ResponsiveWrapper from "../UI/ResponsiveWrapper";
import styles from "../UI/styles.module.css";
import { cardPics } from "./../assets/GoldenLenormand";
//import { cardPics } from "./../assets/ThelemaLenormand";


const LenormandCombinations = () => {
	const [showCombination, setShowCombination] = useState<boolean>(false);
	const [cardCombination, setCardCombination] = useState<any>(null);
	const [enableSwap, setEnableSwap] = useState<boolean>(false);

	const selectCardCombination = (firstCard: string, secondCard: string) => {
		let result: string = "";
		let combination: any = {};
		(cardsArr as Array<CardType>).find((current: CardType) => {
			if (current.key === firstCard) {
				combination = {
					firstCard: {
						title: `${current.key}.${current.card}`,
						key: current.key,
					},
				};
				return current.combinations.find((comb) => {
					if (comb.key === secondCard) {
						combination = {
							...combination,
							secondCard: { title: `${comb.key}.${comb.card}`, key: comb.key },
							combinationMeaning: comb.combinationMeaning,
						};
						setEnableSwap(true);
						setShowCombination(true);
						result = comb.combinationMeaning;
						return result;
					}
				});
			}
		});
		console.log(combination);
		setCardCombination(combination);
	};

	return (
		<>
			<ResponsiveWrapper>
				<h4 className={styles.logo}>Lenormand</h4>
				<SelectionTwoCards selectCardCombination={selectCardCombination} />
			</ResponsiveWrapper>
			{showCombination && (
				<div className={styles.combinationDiv}>
					<div className={styles.row}>
						<img src={cardPics[cardCombination.firstCard.key - 1]} />
						<img src={cardPics[cardCombination.secondCard.key - 1]} />
					</div>
					<h4 className={styles.combination}>
						{`${cardCombination?.firstCard.title} & ${cardCombination?.secondCard.title}`}
					</h4>
					<p className={styles.combinationMeaning}>
						{cardCombination?.combinationMeaning}
					</p>
				</div>
			)}
		</>
	);
};

export default LenormandCombinations;

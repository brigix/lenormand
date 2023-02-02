import React from "react";
import cardArr from "./../assets/lenormand_meanings.json";
import styles from "../UI/styles.module.css";
import ResponsiveWrapper from "../UI/ResponsiveWrapper";
import { CardInfo } from "../helpers/Types";

const cardContainer = (card: CardInfo) => {   return (
	<div>
		<h6>
			`${card.key}. ${card.card}`
		</h6>
		<span>{card.meaning}</span>
	</div>
);};

const CardInfo = () => {
	return (
		<ResponsiveWrapper>
			{cardArr.map((card) => {
                return cardContainer(card);
			})}
		</ResponsiveWrapper>
	);
};

export default CardInfo;

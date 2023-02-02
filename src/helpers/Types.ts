export type CardType = {
	key: string;
	card: string;
	combinations: [
		{
			key: string;
			card: string;
			combinationMeaning: string;
		}
	];
};

export type CardInfo = {
	key: string;
	card: string;
	meaning: string;
	more: string;
	astro: string;
	question: string;
	answer: string;
	career: string;
	love: string;
	health: string;
	advice?: string;

}

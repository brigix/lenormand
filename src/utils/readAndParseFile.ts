import rawText from "../assets/deriniai.txt";

export const readFile = () => {
	const result = fetch(rawText)
		.then((r) => r.text())
		.then((text) => {
			return text;
		});
	return result;
};

const parseCardObject = (cardString: string, separator: string) => {
	const cardInfoArr = cardString.split(separator);
	const combination = cardInfoArr[2].split("\n").map((card: string) => {
		return parseCmbinationCard(card, "|");
	});
	return {
		key: cardInfoArr[0],
		card: cardInfoArr[1],
		combinations: removeUndefinedElements(combination),
	};
};

const parseCmbinationCard = (cardString: string, separator: string) => {
	const combination = cardString.split(separator);
	if (combination[1] !== undefined) {
		return {
			key: combination[0],
			card: combination[1],
			combinationMeaning: combination[2],
		};
	}
};

export const parseCombinationsFromFile = async () => {
	const text = readFile();
	const cards: Array<string> = (await text).split("#");
	const cardsArray: Array<any> = cards.map((card) => {
		return parseCardObject(card, "*");
	});
    return cardsArray;
};

const removeUndefinedElements = (arr: Array<any>) => {
	return arr.reduce((acc, curr) => {
		if (curr !== undefined) {
			acc.push(curr);
		}
		return acc;
	}, []);
};

export const exportJson = (data: any) => {
	const element = document.createElement("a");
	const textFile = new Blob([JSON.stringify(data)], { type: "text/plain" });
	element.href = URL.createObjectURL(textFile);
	element.download = "lenormand_combinations.txt";
	document.body.appendChild(element);
	element.click();
};

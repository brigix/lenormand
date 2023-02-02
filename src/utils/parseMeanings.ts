import rawText from "../assets/reiksmes.txt";

export const readFile = () => {
	const result = fetch(rawText)
		.then((r) => r.text())
		.then((text) => {
			return text;
		});
	return result;
};

export const parseMeaningFromFile = async () => {
	const text = readFile();
	const cards: Array<string> = (await text).split("#");
	const cardsArray: Array<any> = cards.map((card) => {
		return parseCardObject(card, "*");
	});
	//exportJson(cardsArray);
	return cardsArray;
};

const parseCardObject = (cardString: string, separator: string) => {
	const cardInfoArr = cardString.split(separator);
	return {
		key: cardInfoArr[0],
        card: cardInfoArr[1],
        meaning: cardInfoArr[2],
        astro: cardInfoArr[3],
        question: cardInfoArr[4],
        answer: cardInfoArr[5],
        more: cardInfoArr[6],
        career: cardInfoArr[7],
        love: cardInfoArr[8],
        health: cardInfoArr[9],
        advice: cardInfoArr[10]
    };
};

export const exportJson = (data: any) => {
	const element = document.createElement("a");
	const textFile = new Blob([JSON.stringify(data)], { type: "text/plain" });
	element.href = URL.createObjectURL(textFile);
	element.download = "lenormand_meanings.txt";
	document.body.appendChild(element);
	element.click();
};
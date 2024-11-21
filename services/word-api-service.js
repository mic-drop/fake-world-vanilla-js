import board from "../model/board.js";

const getWord = async function () {
    const URL_API = "https://random-word-api.herokuapp.com/all";
    const response = await fetch(URL_API);
    const list = await response.json().then(list => list.filter(word => word.length === 5));
    board.correctWord = await list[Math.floor(Math.random() * (list.length - 0 + 1)) + 0];
    console.log("This is word " + board.correctWord);
}

export default getWord;

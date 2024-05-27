import board from "../model/board.js";

const getWord = async function () {
    const URL_API = "https://random-word-api.herokuapp.com/word?length=5";
    const response = await fetch(URL_API);
    const word = await response.json();
    board.correctWord = word[0];
}

export default getWord;

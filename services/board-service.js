let boardService = {
    getCols: () => 5,
    getRows: () => 6,
    currentRound: 0,
    lastWord: [],
    correctWord: "tears"
};

boardService.maxRounds = boardService.getCols();

boardService.playRound = function (lastWord) {
    boardService.currentRound++;
    boardService.lastWord.push(lastWord);
    checkWord(lastWord);
}

const checkWord = function (lastWord) {
    const classes = [];
    lastWord.split('').forEach(letter => {
        classes.push(checkLetter(letter));
    });
    return classes;
}

const checkLetter = function (letter, index) {
    if (boardService.correctWord[index] === letter) {
        return "correct";
    }
    if (boardService.correctWord.includes(letter)) {

        return "miss";
    }
    return "wrong";
}

export default boardService;

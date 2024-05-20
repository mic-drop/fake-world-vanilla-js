import board from '../model/board.js'

let boardService = {
    getCols: () => board.getCols(),
    getRows: () => board.getRows(),
};

boardService.maxRounds = function () {
    board.getCols();
}
boardService.playRound = function (lastWord) {
    board.currentRound++;
    board.lastWord = lastWord;
    board.classes = checkWord(lastWord);
}

boardService.hasWon = function () {
    let hasWon = true;
    console.log(board.classes)
    board.classes.forEach(n => {
        if (n !== 'correct') {
            hasWon = false;
        }
    })
    return hasWon;
}

const checkWord = function (lastWord) {
    const classes = [];
    lastWord.toLowerCase().split('').forEach((letter, index) => {
        classes.push(checkLetter(letter, index));
    });
    return classes;
}

const checkLetter = function (letter, index) {
    if (board.correctWord[index] === letter) {
        return "correct";
    }
    if (board.correctWord.includes(letter)) {

        return "miss";
    }
    return "wrong";
}

boardService.getLastWord = function () {
    return board.lastWord;
}

boardService.getClasses = function () {
    return board.classes;
}

boardService.getCurrentRound = function () {
    return board.currentRound;
}

export default boardService;

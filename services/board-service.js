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
        let count = countLetter(board.lastWord.substring(0, index + 1), letter);
        console.log(count);
        if (count > 1) {
            return "wrong"
        }
        return "miss";
    }
    return "wrong";
}

const countLetter = function (arr, letter) {
    console.log('This is letter ', letter);
    console.log('This is arr ', arr);
    let counter = 0;
    arr.split('').forEach(n => {
        if (n === letter) {
            counter++;
        }
    })
    return counter;
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

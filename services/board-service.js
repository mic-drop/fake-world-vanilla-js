import board from '../model/board.js'

let boardService = {
    getCols: () => board.getCols(),
    getRows: () => board.getRows(),
    getCorrectWord: () => board.correctWord
};

boardService.maxRounds = function () {
    board.getCols();
}
boardService.playRound = function (lastWord) {
    board.currentRound++;
    board.lastWord = lastWord.toLowerCase();
    checkGreens(board.lastWord);
    checkYellows(board.lastWord);
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
        if (count > 1) {
            return "wrong"
        }
        return "miss";
    }
    return "wrong";
}

const countLetter = function (arr, letter) {
    if (typeof arr === 'string') {
        arr = [...arr];
    }
    let counter = 0;
    arr.forEach(n => {
        if (n === letter) {
            counter++;
        }
    })
    return counter;
}

const checkGreens = function (attemptWord) {
    attemptWord.split('').forEach((n, index) => {
        if (n === board.correctWord[index]) {
            board.classes[index] = 'correct';
            return;
        }
        board.classes[index] = 'wrong';
    })
}

const checkYellows = function (lastAttempt) {
    const noGreensCorrect = board.correctWord.split('').filter((n, index) => board.classes[index] !== 'correct');

    const attemptSet = new Set(lastAttempt);

    attemptSet.forEach(n => {

        if (noGreensCorrect.includes(n)) {
            let yellowLetterCount = countLetter(noGreensCorrect, n);

            lastAttempt.split('').forEach((letter, index) => {
                if (letter === n && yellowLetterCount > 0 && board.classes[index] != 'correct') {
                    board.classes[index] = 'miss';
                    yellowLetterCount--;
                }
            })
        }
        return;
    });
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

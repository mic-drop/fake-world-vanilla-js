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
        console.log(count);
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
    const noGreensAttempt = lastAttempt.split('').filter((n, index) => board.classes[index] !== 'correct');

    lastAttempt.split('').forEach((n, index) => {
        if (board.classes[index] === 'correct') {
            return;
        }
        if (noGreensCorrect.includes(n)) {
            console.log('this is letter -> ' + n + ' index -> ' + index + ' of ' + lastAttempt);

            let counterCorrect = countLetter(noGreensCorrect, n);
            console.log("There is ", counterCorrect + " yellow " + n + " misplaced");

            let substring = noGreensAttempt.join('').substring(0, index).split('');
            substring = substring == '' ? noGreensAttempt[0] : substring;
            console.log("This is substring", substring);
            console.log("Type of substring", typeof substring)

            let counterSubstringAttempt = countLetter(substring, n);
            console.log("This is counter substring", counterSubstringAttempt);

            if (counterSubstringAttempt <= counterCorrect) {
                board.classes[index] = 'miss';
            }
        }

    })

    /*     noGreensAttempt.forEach((n, index) => {
            if (noGreensCorrect.includes(n)) {
    
                let counterCorrect = countLetter(noGreensCorrect, n);
    
                let timesLetterAppearsInAttemptSubstring = countLetter()
    
                if (yellowCounter <= counterCorrect) {
                    board.classes[index] = 'miss';
    
                }
            }
        }) */

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

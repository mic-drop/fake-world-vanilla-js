import boardController from "../controllers/board-controller.js";
import boardService from "../services/board-service.js";

export function loadHandlers(currentRow) {

    const squares = Object.values($('.input')).slice(0, 5);

    squares.forEach((element, i) => {
        if (i === 4) {
            $(element).on("keyup", (e) => {
                if (e.keyCode === 13) {
                    const word = squares.reduce((acc, element) => {
                        return acc + $(element).val() || '';
                    }, '');
                    if (word.length === 5) {
                        boardController.playRound(word);
                        return;
                    }
                }
                if (e.key === 'Backspace') {
                    goBackwards(element, e, currentRow, i);
                }
            })
            return;
        }
        $(element).on("keyup", (e) => {
            defaultButton(e, currentRow, i);
            if (i > 0) {
                goBackwards(element, e, currentRow, i);
            }
        })

    });
}

const defaultButton = function (e, currentRow, index) {
    let square = $(`#r${currentRow}-i${index}`);

    if ((square.val() >= 'a' && square.val() <= 'z') || (square.val() >= 'A' && square.val() <= 'Z')) {
        $(`#r${currentRow}-i${index + 1}`).focus();
        return;
    }
}

const goBackwards = function (element, e, currentRow, index) {
    if ($(element).val() === '' && e.key === 'Backspace') {
        document.activeElement.blur();
        $(`#r${currentRow}-i${index - 1}`).focus();
    }
}

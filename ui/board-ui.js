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
                        boardService.playRound(word);
                        boardController.init();
                    }
                }
            })
            return;
        }
        $(element).on("keyup", (e) => {
            if ((e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 97 && e.keyCode <= 122)) {
                $(`#r${currentRow}-i${i + 1}`).focus();
            }
        })

    });
}

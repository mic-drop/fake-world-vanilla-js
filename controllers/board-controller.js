import boardService from "../services/board-service.js";
import boardView from "./../views/board-view.js"
import gameOverView from "../views/gameover-view.js";

let boardController = {};

boardController.init = function () {
    console.log("board controller triggered");
    boardView.show();
}

boardController.playRound = function (word) {
    boardService.playRound(word);
    if (boardService.hasWon()) {
        gameOverView.show();
        return;
    }
    if (boardService.getCurrentRound() === boardService.getCols() + 1) {
        gameOverView.lostShow();
    }
    boardView.show();

}

export default boardController;

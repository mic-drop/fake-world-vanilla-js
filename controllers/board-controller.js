import boardService from "../services/board-service.js";
import boardView from "./../views/board-view.js"
import gameOverView from "../views/gameover-view.js";
import getWord from "../services/word-api-service.js";

let boardController = {};

boardController.init = function () {
    console.log("board controller triggered");
    getWord();
    boardView.show();
}

boardController.playRound = function (word) {
    boardService.playRound(word);
    if (boardService.hasWon()) {
        gameOverView.show();
        return;
    }
    if (boardService.getCurrentRound() === boardService.getCols() + 1) {
        gameOverView.lostShow(boardService.getCorrectWord());
    }
    boardView.show();

}

export default boardController;

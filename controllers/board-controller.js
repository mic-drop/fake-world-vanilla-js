
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
    console.log('ho!');
    if (boardService.hasWon()) {
        console.log('Hi!');
        gameOverView.show();
    }
    boardView.show();

}

export default boardController;

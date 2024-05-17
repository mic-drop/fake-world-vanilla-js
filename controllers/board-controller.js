
import boardService from "../services/board-service.js";
import boardView from "./../views/board-view.js"

let boardController = {};

boardController.init = function () {
    console.log("board controller triggered");
    boardView.show();
}

boardController.playRound = function (word) {
    boardService.playRound(word);
    boardView.show();
}

export default boardController;

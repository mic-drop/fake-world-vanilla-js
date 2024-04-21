
import boardView from "./../views/board-view.js"

let boardController = {};

boardController.init = function () {
    console.log("controller triggered");
    boardView.show();
}

export default boardController;

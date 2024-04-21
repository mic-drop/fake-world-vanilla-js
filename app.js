import boardController from "./controllers/board-controller.js";

$(document).ready(() => {
    console.log('app triggered');
    boardController.init();
});

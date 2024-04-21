import { loadHandlers } from "../ui/board-ui.js";

let boardView = {};

boardView.show = function () {
    renderBoard();
    loadHandlers();
}

let renderBoard = function () {
    let board = '<div id="board"></div>';
    $(board).appendTo('#main-content');
    renderRow()

}

let renderRow = function () {

    let cols = 5;

    for (let i = 0; i < cols; i++) {

        let input = `<input id="r1-i${i}" class="square" maxLength="1" autofocus type="text" pattern="^[a-zA-Z]+$"></input>`;

        $(input).appendTo('#board')

    }
}


export default boardView;

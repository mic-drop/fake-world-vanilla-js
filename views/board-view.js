import { loadHandlers } from "../ui/board-ui.js";
import boardService from "../services/board-service.js";

let boardView = {};

boardView.show = function () {
    renderBoard();
    loadHandlers();
}

let renderBoard = function () {
    let board = '<div id="board"></div>';
    $(board).appendTo('#main-content');
    renderInputRow()
    renderSquareRow();

}

let renderInputRow = function () {


    const cols = boardService.getCols();
    let row = `<div id="row"></div>`;
    $(row).appendTo('#board');

    for (let i = 0; i < cols; i++) {

        let input = `<input id="r1-i${i}" class="square input" maxLength="1" autofocus type="text" pattern="^[a-zA-Z]+$"></input>`;

        $(input).appendTo($('#row'));

    }
}

let renderSquareRow = function () {
    const cols = boardService.getCols();
    let row = `<div id="row-square"></div>`;
    $(row).appendTo('#board');
    for (let i = 0; i < cols; i++) {
        let square = `<div id="r2-i${i}" class="square"></div>`
        $(square).appendTo('#row-square');
    }

}

export default boardView;

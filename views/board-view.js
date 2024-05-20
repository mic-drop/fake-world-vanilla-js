import { loadHandlers } from "../ui/board-ui.js";
import boardService from "../services/board-service.js";

let boardView = {};

boardView.show = function () {
    if (boardService.getCurrentRound() === 0) {
        let board = '<div id="board"></div>';
        $(board).appendTo('#main-content');
        renderBoard();
        return;
    }
    renderRound();
}

let renderBoard = function () {

    const rows = boardService.getRows();

    for (let row = 0; row < rows; row++) {

        let divRow = `<div id="row-${row}-square" class="row"></div>`;
        $(divRow).appendTo('#board');
        if (row > 0) {
            renderBlankSquareRow(row);
        }
    }
    renderInputRow(0);

}

let renderRound = function () {
    const currentRound = boardService.getCurrentRound();

    renderResultSquareRow(currentRound - 1);
    renderInputRow(currentRound);
}


let renderInputRow = function (currentRow) {

    const row = $(`#row-${currentRow}-square`);
    $(row).empty();

    const cols = boardService.getCols();

    for (let i = 0; i < cols; i++) {

        let input = `<input id="r${currentRow}-i${i}" class="square input" maxLength="1" autofocus type="text" pattern="^[a-zA-Z]+$"></input>`;
        $(input).appendTo(row);

    }
    loadHandlers(currentRow);
    $(`#r${currentRow}-i0`).focus();
}

let renderBlankSquareRow = function (currentRow) {

    const cols = boardService.getCols();
    let row = $(`#row-${currentRow}-square`);
    for (let i = 0; i < cols; i++) {
        let square = `<div id="r${currentRow}-i${i}" class="square"></div>`;

        $(square).appendTo(row);
    }
}

let renderResultSquareRow = function (currentRow) {
    const cols = boardService.getCols();
    let row = $(`#row-${currentRow}-square`);

    $(row).empty();

    renderBlankSquareRow(currentRow);
    for (let i = 0; i < cols; i++) {
        let square = $(`#r${currentRow}-i${i}`);
        $(square).html(boardService.getLastWord()[i].toUpperCase());
        $(square).addClass(boardService.getClasses()[i]);
    }
}

export default boardView;

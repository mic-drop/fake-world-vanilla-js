import { loadHandlers } from "../ui/board-ui.js";
import boardService from "../services/board-service.js";

let boardView = {};

boardView.show = function () {
    $('#main-content').empty();
    let board = '<div id="board"></div>';
    $(board).appendTo('#main-content');

    renderBoard(boardService.currentRound);
    /*     if (boardService.currentRound < boardService.maxRounds) {
    
            renderBoard(boardService.currentRound);
        }; */

}

let renderBoard = function (round) {

    round = round || 0;
    const rows = boardService.getRows();

    for (let row = 0; row < rows; row++) {
        if (round === row) {
            renderInputRow();
            continue;
        }
        renderSquareRow(row);
    }
    loadHandlers();
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

let renderSquareRow = function (currentRow) {
    const cols = boardService.getCols();
    let row = `<div id="row-${currentRow}-square"></div>`;
    $(row).appendTo('#board');
    for (let i = 0; i < cols; i++) {
        let square = `<div id="r${currentRow}-i${i}" class="square"></div>`
        $(square).appendTo(`#row-${currentRow}-square`);
    }

}

export default boardView;

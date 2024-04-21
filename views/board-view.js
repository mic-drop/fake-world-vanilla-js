let boardView = {};

boardView.show = function () {
    renderBoard();
    loadHandlers();
}

let loadHandlers = () => {


    let squares = $('.square');
    Object.values(squares).slice(0, 5).forEach((element, i) => {
        console.log(element);
        $(element).on("keyup", (e) => {
            if (e.keyCode == 13) {
                console.log('Enter' + i);
                $(`#r1-i${i + 1}`).focus();
            }
        });

    });

    /*     $(`#r1-i${i}`).on("keyup", (e) => {
            if (e.keyCode == 13) {
                console.log('Enter' + i);
    
            }
        }); */
}

let renderRow = function () {

    let cols = 5;

    for (let i = 0; i < cols; i++) {

        let input = `<input id="r1-i${i}" class="square" maxLength="1" autofocus type="text" pattern="^[a-zA-Z]+$"></input>`;

        $(input).appendTo('#board')

    }
}

let renderBoard = function () {
    let board = '<div id="board"></div>';
    $(board).appendTo('#main-content');
    renderRow()

}

let focusNext = function () {
    let input = $('#r1-i0');
    $(input).on('change', () => {
        console.log('hey')
        $('#r1-i1').focus();
    })
}


export default boardView;

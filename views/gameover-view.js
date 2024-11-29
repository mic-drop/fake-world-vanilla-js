let gameOverView = {};

gameOverView.show = function () {
    let gameOverDiv = `<div id="gameover" class="won square"> YOU WON!</div>`;
    $('#main-content').css('filter', 'blur(9px)');
    $('body').append(gameOverDiv);
}

gameOverView.lostShow = function (word) {
    let lostView = `<div id="gameover" class="lost square">
     <p>YOU LOSE =( !</p>
     <p>Correct Word was </p>
     <h1 id="correct-word">${word.toUpperCase()}</h1>
        </div>`;

    $('#main-content').css('filter', 'blur(9px)');
    $('body').append(lostView);
}

export default gameOverView;

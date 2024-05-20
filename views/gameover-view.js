let gameOverView = {};

gameOverView.show = function () {
    let gameOverDiv = `<div id="gameover" class="won"> YOU WON!</div>`;
    $('#main-content').css('filter', 'blur(9px)');
    $('body').append(gameOverDiv);
}

gameOverView.lostShow = function () {
    let lostView = `<div id="gameover" class="lost"> YOU LOSE =( !</div>`;

    $('#main-content').css('filter', 'blur(9px)');
    $('body').append(lostView);
}

export default gameOverView;

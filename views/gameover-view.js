let gameOverView = {};

gameOverView.show = function () {
    let gameOverDiv = `<div id="gameover"> YOU WON!</div>`;
    $('#main-content').css('filter', 'blur(9px)');
    $('body').append(gameOverDiv);
}

export default gameOverView;

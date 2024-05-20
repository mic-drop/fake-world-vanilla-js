let gameOverView = {};

gameOverView.show = function () {
    let gameOverDiv = `<div id="gameover"></div>`;
    $('#main-content').css('filter', 'blur(9px)');
    $('body').append(gameOverDiv);
}

export default gameOverView;

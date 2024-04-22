let boardService = {
    getCols: () => 5,
    getRows: () => 6,
    currentRound: 0
};

boardService.maxRounds = boardService.getCols();

boardService.playRound = function () {
    boardService.currentRound++;
}

export default boardService;

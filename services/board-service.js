let boardService = {
    getCols: () => 5,
    getRows: () => 6,
    currentRound: 0,
    lastWord: ''
};

boardService.maxRounds = boardService.getCols();

boardService.playRound = function (lastWord) {
    boardService.currentRound++;
    boardService.lastWord = lastWord;
}

export default boardService;

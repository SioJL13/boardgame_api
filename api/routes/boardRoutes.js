'use stricts'
module.exports = function(app) {
    var boardGame = require('../controllers/boardController');

    // boardGames routes
    app.route('/boardgames')
        .get(boardGame.get_all_boardgames)
        .post(boardGame.create_new_boardgame);
    
    app.route('/boardgames/:gameId')
        .get(boardGame.get_boardgame)
        .put(boardGame.update_boardgame)
        .delete(boardGame.delete_boardgame);
};
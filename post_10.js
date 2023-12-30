var Game = /** @class */ (function () {
    function Game() {
        this.board = [[null, null, null], [null, null, null], [null, null, null]];
        this.currentPlayer = 'X';
    }
    Game.prototype.updateBoard = function () {
        var boardElement = document.getElementById('board');
        boardElement.innerHTML = this.board.map(function (row, i) {
            return "<tr>".concat(row.map(function (cell, j) {
                return "<td class=\"cell\" onclick=\"game.play(".concat(i, ", ").concat(j, ")\">").concat(cell !== null && cell !== void 0 ? cell : '-', "</td>");
            }).join(''), "</tr>");
        }).join('');
    };
    Game.prototype.checkWin = function () {
        var lines = [
            [this.board[0][0], this.board[0][1], this.board[0][2]],
            [this.board[1][0], this.board[1][1], this.board[1][2]],
            [this.board[2][0], this.board[2][1], this.board[2][2]],
            [this.board[0][0], this.board[1][0], this.board[2][0]],
            [this.board[0][1], this.board[1][1], this.board[2][1]],
            [this.board[0][2], this.board[1][2], this.board[2][2]],
            [this.board[0][0], this.board[1][1], this.board[2][2]],
            [this.board[0][2], this.board[1][1], this.board[2][0]]
        ];
        for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
            var line = lines_1[_i];
            if (line[0] !== null && line[0] === line[1] && line[0] === line[2]) {
                return line[0];
            }
        }
        return null;
    };
    Game.prototype.isBoardFull = function () {
        for (var _i = 0, _a = this.board; _i < _a.length; _i++) {
            var row = _a[_i];
            if (row.includes(null)) {
                return false;
            }
        }
        return true;
    };
    Game.prototype.isGameOver = function () {
        return this.checkWin() !== null || this.isBoardFull();
    };
    Game.prototype.play = function (x, y) {
        if (this.isGameOver()) {
            console.log('Game over');
        }
        else if (this.board[x][y] === null) {
            this.board[x][y] = this.currentPlayer;
            this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
            this.updateBoard();
        }
        else {
            console.log('Cell is already occupied');
        }
    };
    return Game;
}());
var game = new Game();
game.updateBoard();

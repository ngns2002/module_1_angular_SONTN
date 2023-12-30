class Game {
    private board: ('X' | 'O' | null)[][] = [[null, null, null], [null, null, null], [null, null, null]];
    private currentPlayer: 'X' | 'O' = 'X';

    updateBoard(): void {
        const boardElement = document.getElementById('board')!;
        boardElement.innerHTML = this.board.map((row, i) => 
            `<tr>${row.map((cell, j) => 
                `<td class="cell" onclick="game.play(${i}, ${j})">${cell ?? '-'}</td>`
            ).join('')}</tr>`
        ).join('');
    }

    checkWin(): 'X' | 'O' | null {
        const lines = [
            [this.board[0][0], this.board[0][1], this.board[0][2]],
            [this.board[1][0], this.board[1][1], this.board[1][2]],
            [this.board[2][0], this.board[2][1], this.board[2][2]],
            [this.board[0][0], this.board[1][0], this.board[2][0]],
            [this.board[0][1], this.board[1][1], this.board[2][1]],
            [this.board[0][2], this.board[1][2], this.board[2][2]],
            [this.board[0][0], this.board[1][1], this.board[2][2]],
            [this.board[0][2], this.board[1][1], this.board[2][0]]
        ];

        for (let line of lines) {
            if (line[0] !== null && line[0] === line[1] && line[0] === line[2]) {
                return line[0];
            }
        }

        return null;
    }

    isBoardFull(): boolean {
        for (let row of this.board) {
            if (row.includes(null)) {
                return false;
            }
        }
        return true;
    }

    isGameOver(): boolean {
        return this.checkWin() !== null || this.isBoardFull();
    }

    play(x: number, y: number): void {
        if (this.isGameOver()) {
            console.log('Game over');
        } else if (this.board[x][y] === null) {
            this.board[x][y] = this.currentPlayer;
            this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
            this.updateBoard();
        } else {
            console.log('Cell is already occupied');
        }
    }
}

const game = new Game();
game.updateBoard();

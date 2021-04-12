export const buildBoard = boardDimension => {
    let board = [];

    boardDimension = Math.ceil(boardDimension);

    if (isNaN(boardDimension)) {
        return board;
    }

    for (let i = 0; i < boardDimension; i++) {
        const row = [];
        row.length = boardDimension;
        row.fill(null)

        board.push(row)
    }

    return board;
}

const checkRows = board => {
    for (let row = 0; row < board.length; row++) {
        let candidateWinner = board[row][0];

        if (board[row].every(item => (item === candidateWinner && item !== null))) {
            return true
        }
    }

    return false;
}

export const getCurrentPlayer = (player1, player2) => {

    if (player1.isTurn) {
        return player1
    }
    return player2
}

const checkCols = board => {

    for (let col = 0; col < board[0].length; col++) {
        let currentCandidate = board[0][col];

        for (let row = 1; row < board.length; row++) {

            if (board[row][col] !== currentCandidate) {
                currentCandidate = '';
                break;
            }
        }
        if (currentCandidate) return true;
    }

    return false;
}

const checkMainSlant = board => {

    let candidate = board[0][0];

    if (candidate === null) {
        return false;
    }

    for (let i = 1; i < board.length; i++) {
        if (board[i][i] !== candidate) {
            return false;
        }
    }

    return true;
}

const checkSecondarySlant = board => {

    let candidate = board[0][board[0].length - 1];

    if (candidate === null) {
        return false;
    }

    for (let row = 1; row < board.length; row++) {
        if (board[row][board[row].length - 1 - row] !== candidate) {
            return false;
        }
    }

    return true;
}

export const checkIfWinner = board => {

    if (board.length < 3) {
        return -1
    }

    return checkRows(board) || checkCols(board) || checkMainSlant(board) || checkSecondarySlant(board)
}
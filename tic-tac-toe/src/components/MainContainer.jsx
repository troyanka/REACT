import React, { useState } from 'react';
import { buildBoard, checkIfWinner, getCurrentPlayer } from './utilities/utilities';
import { Board } from './Board/Board';
import { PlayersBoard } from './Players/PlayersBoard';
import { Header } from './Header/Header';
import { Restart } from './Restart/Restart';
import { useAlert } from "react-alert";
import { PLAYING_SIGN } from '../constants/consts';

export const MainContainer = () => {

    const alert = useAlert();

    const [turnsCounter, setTurnsCounter] = useState(0);

    const [player1, setPlayer1] = useState({ score: 0, isTurn: true, signComponent: PLAYING_SIGN.ZERO_SIGN });
    const [player2, setPlayer2] = useState({ score: 0, isTurn: false, signComponent: PLAYING_SIGN.X_SIGN });

    //Board info
    const [boardDimension, setBoardDimension] = useState(3);
    const [currentBoard, setCurrentBoard] = useState(buildBoard(boardDimension));
    const [playingSign, setPlayingSign] = useState(getCurrentPlayer(player1, player2).signComponent);

    const toggleTurn = () => {
        const currentPlayer = getCurrentPlayer(player1, player2);

        if (currentPlayer === player1) {
            setPlayingSign(player2.signComponent);
        }
        else {
            setPlayingSign(player1.signComponent);
        }

        let updatedPlayer1 = { ...player1, isTurn: !player1.isTurn };
        setPlayer1(updatedPlayer1);

        let updatedPlayer2 = { ...player2, isTurn: !player2.isTurn };
        setPlayer2(updatedPlayer2);
    }

    const addPointToWinner = () => {
        const currentPlayer = getCurrentPlayer(player1, player2);
        let updatedPlayerScore = { ...currentPlayer, score: currentPlayer.score + 1 }

        if (currentPlayer === player1) {
            setPlayer1(updatedPlayerScore)
        }
        else {
            setPlayer2(updatedPlayerScore)
        }
    }

    const handleRestart = () => {
        console.log('restart', boardDimension)
        setTurnsCounter(0);
        const newBoard = buildBoard(boardDimension);
        console.log("newBoard", newBoard)
        setCurrentBoard(newBoard);
    }

    // Note: It will happen only after the board is updated
    const checkStatus = updatedBoard => {
        if (turnsCounter >= (boardDimension + boardDimension - 2)) {
            //If winner
            if (checkIfWinner(updatedBoard)) {
                addPointToWinner();
                alert.show(`${getCurrentPlayer(player1, player2).signComponent} won!`);
                handleRestart();
                return;
            }

            //If toe
            if (turnsCounter + 1 === boardDimension * boardDimension) {
                alert.show('It`s a TOI!');
                toggleTurn();
                handleRestart();
                return;
            }
        }

        //If no winner (not end of game)
        setTurnsCounter(turnsCounter + 1);
        toggleTurn();
    }

    const handleBoardCellClicked = (RowIndex, ColIndex) => {
        if (currentBoard[RowIndex][ColIndex] !== null) {
            alert.show('Cell is already settled')
            return;
        }

        let updatedBoard = [
            ...currentBoard,
        ];
        updatedBoard[RowIndex] = [...updatedBoard[RowIndex]];
        updatedBoard[RowIndex][ColIndex] = playingSign;

        setCurrentBoard(updatedBoard);
        checkStatus(updatedBoard);
    }

    const handleDimensionsChange = newBoardDimension => {
        if (turnsCounter > 0) {
            alert.show('Cannot Change the dimensions in the middle of the game! Please restart or finish playing');
            return;
        }
        setCurrentBoard(buildBoard(newBoardDimension));
        setBoardDimension(+newBoardDimension);
    };

    return (
        <div className='main-container-app' data-testid='main-container-app'>
            <Header onBoardDimensionsChange={handleDimensionsChange} currentDimension={boardDimension} />

            <main>
                <PlayersBoard player1={player1} player2={player2} />
                <Board playingBoard={currentBoard} onCellClick={handleBoardCellClicked} />
                <Restart onRestart={handleRestart} />
            </main>
        </div >
    );
};
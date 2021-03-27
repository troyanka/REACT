import React, { useState } from 'react';
import { buildBoard, getCurrentSign, checkIfWinner, getCurrentPlayer } from './utilities/utilities';
import { Board } from './Board/Board';
import { PlayersBoard } from './Players/PlayersBoard';
import { Header } from './Header/Header';
import { Restart } from './Restart/Restart';
import { useAlert } from "react-alert";

export const MainContainer = () => {

    const alert = useAlert();

    const [turnsCounter, setTurnsCounter] = useState(0);

    const [player1, setPlayer1] = useState({ score: 0, isTurn: true, signComponent: 'o' });
    const [player2, setPlayer2] = useState({ score: 0, isTurn: false, signComponent: 'x' });

    //Board info
    const [boardDimension, setBoardDimension] = useState(3);
    const initialPlayingBoard = buildBoard(boardDimension);
    const [currentBoard, setCurrentBoard] = useState(initialPlayingBoard);
    const [playingSign, setPlayingSign] = useState(getCurrentSign(getCurrentPlayer(player1, player2)));

    const toggleTurn = () => {
        const currentPlayer = getCurrentPlayer(player1, player2);

        if (currentPlayer === player1) {
            setPlayingSign(player2.signComponent);
        }
        else {
            setPlayingSign(player1.signComponent);
        }

        let updated1 = { ...player1, isTurn: !player1.isTurn };
        setPlayer1(updated1);

        let updated2 = { ...player2, isTurn: !player2.isTurn };
        setPlayer2(updated2);
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

    const handleBoardCellClicked = (RowIndex, ColIndex) => {
        let updatedBoard = [...currentBoard];
        updatedBoard[RowIndex][ColIndex] = playingSign;
        setCurrentBoard(updatedBoard);

        setTimeout(() => {
            //If winner
            if (checkIfWinner(updatedBoard)) {
                addPointToWinner();

                alert.show(`${getCurrentSign(getCurrentPlayer(player1, player2))} won!`);
                handleRestart()
                return;
            }

            //If toe
            if (turnsCounter + 1 === boardDimension * boardDimension) {
                alert.show('It`s a TOI!');
                toggleTurn();
                handleRestart();
                return
            }

            //If no winner (not end of game)
            toggleTurn();
            setTurnsCounter(turnsCounter + 1);

        }, 10)
    }

    const handleRestart = () => {
        setCurrentBoard(initialPlayingBoard);
        setTurnsCounter(0);
    }

    const handleDimensionsChange = newBoardDimension => {
        if (turnsCounter > 0) {
            setBoardDimension(boardDimension);
            alert.show('Cannot Change the dimensions in the middle of the game! Please restart or finish playing');
            return;
        }
        setCurrentBoard(buildBoard(newBoardDimension));
        setBoardDimension(newBoardDimension);
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
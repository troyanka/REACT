import * as React from 'react';
import { Player } from './Player/Player';
import './PlayersBoard.scss'

export const PlayersBoard = ({ player1, player2 }) => {

    return (
        <div className='players-board'>
            <Player {...player1} />
            <Player {...player2} />
        </div>
    );
};
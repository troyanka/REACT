import * as React from 'react';
import './Player.scss';

export const Player = ({ isTurn, score, signComponent }) => {
    return (
        <div className={`player-container ${isTurn ? 'is-turn' : ''}`.trim()}>
            <span className='player-sign'>Sign: {signComponent}</span>
            <span className='player-score'>Score: {score}</span>
        </div>
    );
};
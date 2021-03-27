import * as React from 'react';
import './Restart.scss';

export const Restart = ({ onRestart }) => {
    return (
        <div className='restart-btn-wrap'>
            <button
                data-testid='restart-btn'
                className='restart-btn'
                onClick={onRestart}>
                Restart
            </button>
        </div>
    );
};
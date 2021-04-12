import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import { XSign } from '../Signs/XSign';
import { ZeroSign } from '../Signs/ZeroSign';
import './Board.scss';
import { PLAYING_SIGN } from '../../constants/consts';

export const Board = ({ playingBoard = [], onCellClick }) => {

    const ref = useRef(null);
    const [cellsHeight, setCellsHeight] = useState();

    //get the height when ref ready
    useEffect(() => {
        setCellsHeight(ref?.current?.clientWidth);
    }, [ref])

    useEffect(() => {
        const resizeListener = () => {
            setCellsHeight(ref?.current?.clientWidth);
        };

        window.addEventListener('resize', resizeListener);

        // clean up function
        return () => {
            window.removeEventListener('resize', resizeListener);
        }
    }, [])

    return (
        <div className='board-container'>
            {
                playingBoard.map((row, rowIndex) => (

                    <div className='board-row' key={`row_${rowIndex}`}>
                        {
                            row.map((colValue, colIndex) => (
                                <div
                                    ref={ref}
                                    key={`col_${colIndex}`}
                                    onClick={() => onCellClick(rowIndex, colIndex)}
                                    style={{ 'height': cellsHeight }}
                                    className='board-cell'>
                                    {
                                        colValue === PLAYING_SIGN.ZERO_SIGN &&
                                        <ZeroSign />
                                    }
                                    {
                                        colValue === PLAYING_SIGN.X_SIGN &&
                                        <XSign />
                                    }
                                </div>)
                            )
                        }
                    </div>
                ))
            }
        </div >
    );
};
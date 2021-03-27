import * as React from 'react';
import './Header.scss';

export const Header = ({ onBoardDimensionsChange, currentDimension }) => {

    const minValue = 3;
    const maxValue = 10;

    const onInputHandle = e => {
        const val = e.target.value;
        if (val <= maxValue && val >= minValue) {
            onBoardDimensionsChange(val);
        }
    }

    return (
        <header data-testid='header-app'>
            <h2>Tic-toe Game App</h2>

            <div className='board-dimensions-select'>
                <label htmlFor='board-dimension'>Choose Board Dimension: </label>

                <input
                    data-testid='input-dimensions'
                    id='board-dimension'
                    type='number'
                    onInput={onInputHandle}
                    value={currentDimension}
                    min={minValue}
                    max={maxValue} />
            </div>
        </header>
    );
};
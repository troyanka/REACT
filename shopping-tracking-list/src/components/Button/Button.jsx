import * as React from 'react';
import './Button.scss';

export const Button = ({ onBtnClick = null, text = null }) => {
    return (
        <button onClick={onBtnClick}>{text}</button>
    );
};
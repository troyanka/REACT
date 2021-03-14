import * as React from 'react';
import './ErrorMessage.scss';

export const ErrorMessage = ({ messageText }) => {
    return (
        <div className='error-msg'>{messageText}</div>
    );
};
import * as React from 'react';
import { LinksSection } from '../LinksSection/LinksSection';

export const ErrorPageContainer = () => {
    return (
        <div>
            <p>404 Not Found Page</p>
            <LinksSection text='Go Home' linkTo="/"/>
        </div>
    );
};
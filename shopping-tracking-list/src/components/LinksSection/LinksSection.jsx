import * as React from 'react';
import { Link } from 'react-router-dom';
import './LinksSection.scss';

export const LinksSection = ({ text, imageSrc = null, linkTo }) => {
    return (
        <div>
            <Link to={linkTo} className='link-section'>
                <span className='link-text'>{text}</span>
                {imageSrc && <img src={imageSrc} className='link-icon' alt="Link icon" title="Link icon" />}
            </Link>
        </div>
    );
};
import * as React from 'react';
import './Header.scss';
import logo from '../../images/logo.jpg'
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header className="app-header">
            <Link to='/'> <img className='app-logo' src={logo} alt='Logo' title="Logo" /></Link>
        </header>
    );
};
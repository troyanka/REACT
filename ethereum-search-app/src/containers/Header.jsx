import React from 'react';
import './Header.scss';
import Search from '../components/Search/Search';

const HeaderContainer = () => {

    return (
        <header className='header-section'>
            <Search />
        </header>
    );
}

export default HeaderContainer;
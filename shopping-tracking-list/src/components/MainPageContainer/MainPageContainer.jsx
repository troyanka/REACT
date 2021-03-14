import * as React from 'react';
import { Link } from 'react-router-dom';
import './MainPageContainer.scss';
import addPicture from '../../images/Add_Icon_image.png';
import searchPicture from '../../images/Search_Icon_image.jpg';

export const MainPageContainer = () => {
    return (
        <div className='main-container-wrapper'>
            <Link to="/list" className='action-img'>
                <img src={addPicture} alt='Add New Item Picture' title='Add New Item Picture' />
            </Link>
            <Link to="/received" className='action-img'>
                <img src={searchPicture} alt='Received Item Picture' title='Received Item Picture' />
            </Link>
        </div>
    );
};
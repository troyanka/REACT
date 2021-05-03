import React from 'react';
import './Header.scss';
import { useDispatch } from 'react-redux';
import Search from '../components/Search/Search';
import DropDown from '../components/common/DropDown/DropDown';
import { sortByOptions } from '../constants/sortOptions';
import { onSortByValueChanged } from '../actions/actions';

const HeaderContainer = () => {

    const dispatch = useDispatch();
    const onSortByChange = e => dispatch(onSortByValueChanged(e.target.value));

    return (
        <header className='header-section'>
            <Search />
            <DropDown options={sortByOptions} onChangeHandler={onSortByChange} labelText='Sort By:' />
        </header>
    );
}

export default HeaderContainer;
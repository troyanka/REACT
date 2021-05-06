import React from 'react';
import './Header.scss';
import { useDispatch, useSelector } from 'react-redux';
import Search from '../components/Search/Search';
import DropDown from '../components/common/DropDown/DropDown';
import { sortByOptions } from '../constants/consts';
import { onSortByValueChanged } from '../actions/actions';

const HeaderContainer = () => {

    const dispatch = useDispatch();
    const onSortByChange = e => dispatch(onSortByValueChanged(e.target.value));
    const sortValue = useSelector(({ gihpyReducer }) => gihpyReducer.sortValue);

    return (
        <header className='header-section'>
            <Search />
            <DropDown
                options={sortByOptions}
                onChangeHandler={onSortByChange}
                labelText='Sort By:'
                sortValue={sortValue} />
        </header>
    );
}

export default HeaderContainer;
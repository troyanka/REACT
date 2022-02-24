import React from 'react';
import './Header.scss';
import { useDispatch, useSelector } from 'react-redux';
import DropDown from '../components/common/DropDown/DropDown';
import { sortByOptions } from '../constants/consts';
import { onSortByValueChanged } from '../actions/actions';
import SwitchBtn from '../components/common/DropDown/SwitchBtn/SwitchBtn';
import Search from '../components/Search/Search';

const HeaderContainer = () => {

    const dispatch = useDispatch();
    const onSortByChange = e => dispatch(onSortByValueChanged(e.target.value));
    const sortValue = useSelector(({ gihpyState }) => gihpyState.sortValue);
    //debugger;
    return (
        <header className='header-section'>
            <Search />
            <DropDown
                options={sortByOptions}
                onChangeHandler={onSortByChange}
                labelText='Sort By:'
                sortValue={sortValue} />
            <SwitchBtn label='Show Dates' id='ShowDatesToggle' defaultOn={true} />
            <SwitchBtn label='Show Names' id='ShowNamesToggle' defaultOn={false} />
        </header>
    );
}

export default HeaderContainer;
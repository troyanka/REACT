import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onStartFetch } from '../../actions/actions';
import { TextField } from '@material-ui/core';
import debounce from 'lodash.debounce'

const Search = () => {
    const dispatch = useDispatch();

    //const searchTerm = useSelector(({ gihpyReducer }) => gihpyReducer.searchTerm);
    const [searchValue, setSearchValue] = useState('');

    const updateSearchValue = () => {
        // A search query api call.
        dispatch(onStartFetch(searchValue));
    };

    const delayedQuery = useCallback(debounce(updateSearchValue, 500), [searchValue]);

    useEffect(() => {

        if (searchValue) {
            delayedQuery();
        }

        // Cancel the debounce on useEffect cleanup.
        return delayedQuery.cancel;
    }, [searchValue, delayedQuery]);

    const handleInputValueChange = e => {
        const eventValue = e.target.value;
        setSearchValue(eventValue);
    };

    return (
        <TextField
            label="Search Term"
            type="text"
            value={searchValue}
            onChange={handleInputValueChange}
        />
    );
}

export default Search;
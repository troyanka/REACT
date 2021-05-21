import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onStartFetch, setSearchValue} from '../../actions/actions';
import { TextField } from '@material-ui/core';
import debounce from 'lodash.debounce'

//TODO: check how to make this code better
const Search = () => {
    const dispatch = useDispatch();

    const searchTerm = useSelector(({ gihpyReducer }) => gihpyReducer.searchTerm);

    const updateSearchValue = () => {
        // A search query api call.
        dispatch(onStartFetch());
    };

    const delayedQuery = useCallback(debounce(updateSearchValue, 500), [searchTerm]);

    //TODO: make custom hook
    useEffect(() => {
        if (searchTerm) {
            delayedQuery();
        }

        // Cancel the debounce on useEffect cleanup.
        return delayedQuery.cancel;
        
    }, [searchTerm, delayedQuery]);

    const handleInputValueChange = e => {
        const eventValue = e.target.value;
        dispatch(setSearchValue(eventValue));
    };

    return (
        <TextField
            placeholder="Search Term"
            type="text"
            value={searchTerm}
            onChange={handleInputValueChange}
        />
    );
}

export default Search;
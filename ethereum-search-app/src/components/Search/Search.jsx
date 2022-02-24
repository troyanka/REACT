import React from 'react';
import { useSelector } from 'react-redux';
import { TextField } from '@material-ui/core';
import useSearchTermChange from '../../hooks/useDelayedQuery/useSearchTermChange';

const Search = () => {
    const searchTerm = useSelector(({ gihpyReducer }) => gihpyReducer.searchTerm);
    const { onChange } = useSearchTermChange(searchTerm);

    return (
        <TextField
            placeholder="Search Term"
            type="text"
            value={searchTerm}
            onChange={onChange}
        />
    );
}

export default Search;
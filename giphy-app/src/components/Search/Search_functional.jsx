import React from 'react';
import { useSelector } from "react-redux";
import { TextField } from '@material-ui/core';
import useSearchTermChange from '../../customHooks/useSearchTermChange';

const MemoizedTextField = React.memo(props => <TextField {...props} />);

const Search123 = () => {
    const searchTerm = useSelector(({ gihpyState }) => gihpyState.searchTerm);
    const { onChange } = useSearchTermChange();

    // TODO: read about Classes, and rewrite this component to class component
    // TODO: make example with loosing closure (in use Effect)
    return (
        <MemoizedTextField
            placeholder="Search Term"
            type="text"
            value={searchTerm}
            onChange={onChange}
        />
    )
}

export default Search123;
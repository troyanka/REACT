import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { TextField } from '@material-ui/core';
import { useDispatch } from "react-redux";
import { onFetchSuccess, onStartFetch, setSearchValue } from "../../actions/actions";

const MemoizedTextField = React.memo(props => <TextField {...props} />);

const Search = () => {
    const searchTerm = useSelector(({ gihpyState }) => gihpyState.searchTerm);
    const dispatch = useDispatch();

    const search = async () => {
        const key = 'X3ufz4ilCYQih6AYzcc6EAoiYbkedprW';

        dispatch(onStartFetch());
        const response = await fetch(`https://api.giphy.com/v1/stickers/search?api_key=${key}&q=${searchTerm}&limit=9&offset=0&lang=en`);
        const data = await response.json();
        dispatch(onFetchSuccess(data.data));

        // TODO: how to detect if the serch temp changed?
        //console.log('vika', localValue === searchTerm);
    }

    const onChange = useCallback(e => {
        dispatch(setSearchValue(e.target.value));
        search(); // TODO: here or inside useEffect?
    }, [searchTerm])

    return (
        <MemoizedTextField
            placeholder="Search Term"
            type="text"
            value={searchTerm}
            onChange={onChange}
        />
    )
}

export default Search;
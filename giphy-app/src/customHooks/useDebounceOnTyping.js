import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { onStartFetch, setSearchValue } from "../actions/actions";
import debounce from 'lodash.debounce';

const useDebounceOnTyping = () => {
    const dispatch = useDispatch();

    const [searchValue, setSearchValue] = useState('');


    const fetchGips = valToSearch => {
        const key = 'X3ufz4ilCYQih6AYzcc6EAoiYbkedprW';
        const rnd = parseInt(Math.random().toFixed(3).substring(2, 6));
        const localValue = valToSearch;

        setTimeout(async () => {
            console.log('before:', localValue)
            const response = await fetch(`https://api.giphy.com/v1/stickers/search?api_key=${key}&q=${localValue}&limit=9&offset=0&lang=en`)
            console.log('localValue', localValue);
            console.log('searchValue', searchValue);
            console.log(localValue == searchValue);
            console.log('-----------------------------');
        }, rnd)
    }

    const delayedQuery = useCallback(debounce(() => fetchGips(searchValue), 500), [searchValue]);

    useEffect(() => {
        if (searchValue) {
            delayedQuery();
        }
        // Cancel the debounce on useEffect cleanup.
        return delayedQuery.cancel;

    }, [searchValue, delayedQuery]);

    return {
        onChange: e => setSearchValue(e.target.value),
    };
}
export default useDebounceOnTyping;
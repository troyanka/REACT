import { useCallback, useEffect, useMemo } from "react";
import { onStartFetch, setSearchValue } from "../actions/actions";
import debounce from 'lodash.debounce';
import { useDispatch } from "react-redux";

const useSearchTermChange = () => {
    const dispatch = useDispatch();
    
    const search = useMemo(() => {
        return debounce(() => {
            dispatch(onStartFetch());
        }, 500)
    }, [])


    useEffect(() => {
        search();
    }, [])

    const onChange = useCallback(e => {
        dispatch(setSearchValue(e.target.value));
    }, [])

    // TODO: read useCallback, useMemo, how to pass parameters to hooks, dependancies (like to useEffect)

    return {
        onChange
    };
}
export default useSearchTermChange;
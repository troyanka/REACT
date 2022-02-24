import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { onStartFetch, setSearchValue } from "../../actions/actions";
import debounce from 'lodash.debounce';

const useSearchTermChange = (searchTerm) => {
    const dispatch = useDispatch();
    const updateSearchValue = () => dispatch(onStartFetch());
    const delayedQuery = useCallback(debounce(updateSearchValue, 500), [searchTerm]);

    useEffect(() => {
        if (searchTerm) {
            delayedQuery();
        }

        // Cancel the debounce on useEffect cleanup.
        return delayedQuery.cancel;

    }, [searchTerm, delayedQuery]);

    return {
        onChange: e => dispatch(setSearchValue(e.target.value)),
    };
}
export default useSearchTermChange;
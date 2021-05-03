import { FETCH_DATA_BEGIN, SORT_BY_VALUE_CHANGE } from '../constants/actionTypes';
import { buildURLSearchParamsByValue } from '../utilities/utilities';

const storeInURLMiddleWare = store => next => action => {
    console.log("sortingMiddleWare");

    switch (action.type) {
        case SORT_BY_VALUE_CHANGE: {
            buildURLSearchParamsByValue('sort-by', action.payload);
            break;
        }
        case FETCH_DATA_BEGIN: {
            buildURLSearchParamsByValue('search-value', action.payload);
            break;
        }
    }

    return next(action);
}

export default storeInURLMiddleWare;
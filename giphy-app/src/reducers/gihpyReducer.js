import { APP_INIT, ON_FETCH_GIPHS_SUCCESS, FETCH_DATA_BEGIN, ON_FETCH_FAILURE, SORT_BY_VALUE_CHANGE, ON_START_FETCH_GIPHS } from '../constants/actionTypes';
import { getURLSearchParams } from '../utilities/utilities';

const initialstate = {
    giphs: undefined,
    isLoading: false,
    isError: '',
    sortValue: undefined,
    searchTerm: undefined,
};

const gihpyReducer = (state = initialstate, action) => {
    switch (action.type) {
        case APP_INIT: {

            const URLparams = getURLSearchParams();
            
            return {
                ...state,
                // TODO: make consts + sort works when there is a value
                sortValue: URLparams['sort-by'],
                searchTerm: URLparams['search-value']
            }
        }
        case ON_START_FETCH_GIPHS: {
            return {
                ...state,
                isLoading: true
            }
        }
        case ON_FETCH_GIPHS_SUCCESS: {
            const { payload: giphs } = action;

            return {
                ...state,
                giphs: giphs,
                isLoading: false
            }
        }
        case ON_FETCH_FAILURE: {
            const error = action.payload;
            return {
                ...state,
                isLoading: false,
                isError: error
            }
        }
        case SORT_BY_VALUE_CHANGE: {
            const sortByValue = action.payload;

            return {
                ...state,
                sortValue: sortByValue
            }
        }
        case FETCH_DATA_BEGIN: {
            const searchTerm = action.payload;

            return {
                ...state,
                searchTerm: searchTerm
            }
        }

        default:
            return state;
    }
}

export default gihpyReducer
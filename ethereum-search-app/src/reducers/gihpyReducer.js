import { ON_FETCH_GIPHS_SUCCESS, SET_SEARCH_VALUE, ON_FETCH_FAILURE, ON_START_FETCH_GIPHS } from '../constants/actionTypes';

const initialstate = {
    giphs: undefined,
    isLoading: false,
    isError: '',
    searchTerm: undefined,
};

const gihpyReducer = (state = initialstate, action) => {
    switch (action.type) {
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
        case SET_SEARCH_VALUE: {
            return {
                ...state,
                searchTerm: action.payload
            }
        }

        default:
            return state;
    }
}

export default gihpyReducer
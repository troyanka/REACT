import { SET_SHOW_DATES_TOGGLE, SET_SHOW_NAMES_TOGGLE, FETCH_DATA_BEGIN, APP_INIT, SET_SEARCH_VALUE, ON_FETCH_GIPHS_SUCCESS, ON_FETCH_FAILURE, SORT_BY_VALUE_CHANGE } from '../constants/actionTypes';
import axios from 'axios';

export const appInit = () => {
    return {
        type: APP_INIT,
    }
}

// **FETCH DATA WITH AXIOS LIBRARY
// export const onStartFetch = () => {
//     return async function (dispatch, getState) {
//         try {
//             const searchTerm  = getState().gihpyState.searchTerm;
//             dispatch(fetchDataBegin(searchTerm));
//             const key = 'X3ufz4ilCYQih6AYzcc6EAoiYbkedprW';
//             const response = await axios.get(`https://api.giphy.com/v1/stickers/search?api_key=${key}&q=${searchTerm}&limit=9&offset=0&lang=en`);
//             dispatch(onFetchSuccess(response.data.data));
//         }
//         catch (error) {
//             dispatch(onFetchFailure(error));
//         }
//     }
// }

// **FETCH JS API AND PROMISES
// export const onStartFetch = () => {
//     return function (dispatch, getState) {
//         const searchTerm = getState().gihpyState.searchTerm;
//         dispatch(fetchDataBegin(searchTerm));
//         const key = 'X3ufz4ilCYQih6AYzcc6EAoiYbkedprW';
//         fetch(`https://api.giphy.com/v1/stickers/search?api_key=${key}&q=${searchTerm}&limit=9&offset=0&lang=en`)
//             .then(response => response.json())
//             .then(response => dispatch(onFetchSuccess(response.data)))
//             .catch(error => {
//                 dispatch(onFetchFailure(error));
//             })
//     }
// }

let savedSearch = '';
// *&FETCH JS API AND ASYNC AWAYT
export const onStartFetch = () => {
    return async function (dispatch, getState) {
        const searchTerm = getState().gihpyState.searchTerm;
        if (!searchTerm) return
        savedSearch = searchTerm;
        dispatch(fetchDataBegin(searchTerm));
        const key = 'X3ufz4ilCYQih6AYzcc6EAoiYbkedprW';

        try {
            const response = await fetch(`https://api.giphy.com/v1/stickers/search?api_key=${key}&q=${searchTerm}&limit=9&offset=0&lang=en`)
            if (!response.ok) {
                throw new Error(`Error! ${response.status}`)
            }
            const data = await response.json();

            // setTimeout(() => {
            if (savedSearch === searchTerm) {
                dispatch(onFetchSuccess(data.data));
            } else {
                console.log(searchTerm, 'is not relevant any more')
            }
            // }, 2000);


        } catch (error) {
            dispatch(onFetchFailure(error));
        }
    }
}

export const fetchDataBegin = () => {
    return {
        type: FETCH_DATA_BEGIN,
    }
}

export const onFetchSuccess = gifs => {
    return {
        type: ON_FETCH_GIPHS_SUCCESS,
        payload: gifs
    }
}

export const onFetchFailure = error => {
    return {
        type: ON_FETCH_FAILURE,
        payload: error
    }
}

export const onSortByValueChanged = sortValue => {


    return {
        type: SORT_BY_VALUE_CHANGE,
        payload: sortValue
    }
}

export const setSearchValue = value => {
    return {
        type: SET_SEARCH_VALUE,
        payload: value
    }
}

export const setShowDatesToggle = value => {
    return {
        type: SET_SHOW_DATES_TOGGLE,
        payload: value
    }
}

export const setShowNamesToggle = value => {
    return {
        type: SET_SHOW_NAMES_TOGGLE,
        payload: value
    }
}

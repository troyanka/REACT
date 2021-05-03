import { FETCH_DATA_BEGIN, APP_INIT, ON_FETCH_GIPHS_SUCCESS, ON_FETCH_FAILURE, SORT_BY_VALUE_CHANGE } from '../constants/actionTypes';
import axios from 'axios';

export const appInit = () => {
    return {
        type: APP_INIT,
    }
}

export const onStartFetch = searchValue => {
    return async function (dispatch, _getState) {
        try {
            dispatch(fetchDataBegin(searchValue));
            const key = 'X3ufz4ilCYQih6AYzcc6EAoiYbkedprW';
            const response = await axios.get(`https://api.giphy.com/v1/stickers/search?api_key=${key}&q=${searchValue}&limit=9&offset=0&lang=en`);
            dispatch(onFetchSuccess(response.data.data));
        }
        catch (error) {
            dispatch(onFetchFailure(error));
        }
    }
}

export const fetchDataBegin = sortValue => {
    return {
        type: FETCH_DATA_BEGIN,
        payload: sortValue
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
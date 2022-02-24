import { FETCH_DATA_BEGIN, SET_SEARCH_VALUE, ON_FETCH_GIPHS_SUCCESS, ON_FETCH_FAILURE  } from '../constants/actionTypes';
import axios from 'axios';

export const onStartFetch = () => {
    return async function (dispatch, getState) {
        try {
            const searchTerm  = getState().gihpyReducer.searchTerm;
            dispatch(fetchDataBegin(searchTerm));
            const token = 'A4VPX1QV1875GFSD94XYZ14IZ4EA57YNEA';
            const response = await axios.get(`https://api.etherscan.io/api?module=account&action=txlistinternal&startblock=0&endblock=2702578&page=1&offset=10&sort=asc`);
            console.log("response", response)
            dispatch(onFetchSuccess(response.data.data));
        }
        catch (error) {
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

export const setSearchValue = value => {
    return {
        type: SET_SEARCH_VALUE,
        payload: value
    }
}
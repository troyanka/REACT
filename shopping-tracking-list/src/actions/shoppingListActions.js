import { PRODUCT_ADD_CLICK, PRODUCT_RECEIVED, GET_CURRENCY_DATA, FETCH_CURRENCY_RATES_SUCCESS, FETCH_CURRENCY_RATES_FAILURE } from '../constants/actionTypes';

export const productAddClick = (newProd) => {
    return {
        type: PRODUCT_ADD_CLICK,
        newProd
    }
}

export const productReceived = id => {
    return {
        type: PRODUCT_RECEIVED,
        id
    }
}

export const getCurrencyData = () => {
    return {
        type: GET_CURRENCY_DATA
    }
}

export const fetchCurrencyRatesSuccess = currencyData => {
    return {
        type: FETCH_CURRENCY_RATES_SUCCESS,
        currencyData
    }
}

export const fetchCurrencyRatesFailure = () => {
    return {
        type: FETCH_CURRENCY_RATES_FAILURE,
    }
}


import { PRODUCT_ADD, PRODUCT_RECEIVED, FETCH_CURRENCY_DATA_BEGIN, FETCH_CURRENCY_RATES_SUCCESS, FETCH_CURRENCY_RATES_FAILURE } from '../constants/actionTypes';
import axios from 'axios';
import { CURRENCY_NAMES } from '../constants/currencyNames';

export const productAdd = (newProd) => ({
    type: PRODUCT_ADD,
    newProd
})

export const productReceived = id => ({
    type: PRODUCT_RECEIVED,
    id
})

export const fetchCurrencyDataBegin = () => ({
    type: FETCH_CURRENCY_DATA_BEGIN
});

export function getCurrencyData() {
    return async function (dispatch, _getState) {
        try {
            dispatch(fetchCurrencyDataBegin());
            const accessKey = '3e7eda3f7bd0b04d2b6faf8c3154692c';
            const symbolKeys = Object.keys(CURRENCY_NAMES);
            const symbols = symbolKeys.reduce((result, currentKey) => `${result},${CURRENCY_NAMES[currentKey]}`, '')
            const results = await axios.get(`http://api.exchangeratesapi.io/v1/latest?access_key=${accessKey}&symbols=${symbols}`);
            dispatch(fetchCurrencyRatesSuccess(results.data.rates));
        }
        catch (error) {
            dispatch(fetchCurrencyRatesFailure(error));
        }
    }
}

export const fetchCurrencyRatesSuccess = currencyData => ({
    type: FETCH_CURRENCY_RATES_SUCCESS,
    currencyData
})

export const fetchCurrencyRatesFailure = () => ({
    type: FETCH_CURRENCY_RATES_FAILURE,
})


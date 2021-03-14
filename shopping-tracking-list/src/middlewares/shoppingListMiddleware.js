import axios from 'axios';
import { GET_CURRENCY_DATA } from '../constants/actionTypes';
import { fetchCurrencyRatesSuccess, fetchCurrencyRatesFailure } from '../actions/shoppingListActions';

const shoppingListMiddleware = store => next => action => {
    switch (action.type) {
        case GET_CURRENCY_DATA: {
            fetchCurrencyRates()
                .then(response => {
                    const { data } = response;
                    store.dispatch(fetchCurrencyRatesSuccess(data.rates));
                })
                .catch(error => {
                    const { message } = error;
                    store.dispatch(fetchCurrencyRatesFailure(message));
                })
        }
        default: next(action);
    }
}
export default shoppingListMiddleware;

export const fetchCurrencyRates = () => {
    return axios.get(`https://api.exchangeratesapi.io/latest`)
}

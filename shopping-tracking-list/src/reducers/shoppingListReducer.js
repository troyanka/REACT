import isequal from 'lodash.isequal';
import { PRODUCT_ADD, PRODUCT_RECEIVED, FETCH_CURRENCY_RATES_SUCCESS, FETCH_CURRENCY_RATES_FAILURE, FETCH_CURRENCY_DATA_BEGIN } from '../constants/actionTypes';
import { removeItemFromStoreData, sortItemsByDate, addStoreToData } from '../utilities/utilities';
import { PRODUCT_STATUSES } from '../constants/productStatuses';

const initialState = {

    isError: false,
    isLoading: false,
    lastId: 0,
    currencyRates: null,

    //Added items 
    addedItems: [],
    addedStoresData: null,

    //Received Items
    receivedItems: [],
    receivedStoresData: null,
};

const shoppingListReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CURRENCY_DATA_BEGIN: {
            return {
                ...state,
                isLoading: true
            }
        }
        case PRODUCT_ADD: {
            const { newProd } = action;
            newProd.id = state.lastId++;
            newProd.status = PRODUCT_STATUSES.ON_WAY;

            const updatedAddedList = sortItemsByDate([...state.addedItems, newProd]);
            const aggregatedStoresData = addStoreToData(state.addedStoresData, newProd);

            return {
                ...state,
                addedItems: updatedAddedList,
                addedStoresData: aggregatedStoresData
            }
        }
        case PRODUCT_RECEIVED: {
            const { id } = action;
            const receivedItem = state.addedItems.find(item => item.id === id);
            receivedItem.status = PRODUCT_STATUSES.RECEIVED;

            const filteredItems = state.addedItems.filter(item => item.id !== id);

            const aggregatedAddedStoresData = removeItemFromStoreData(state.addedStoresData, receivedItem);
            const updatedReceivedStoresData = addStoreToData(state.receivedStoresData, receivedItem);

            return {
                ...state,
                addedItems: filteredItems,
                receivedItems: [...state.receivedItems, receivedItem],
                addedStoresData: aggregatedAddedStoresData,
                receivedStoresData: updatedReceivedStoresData,
            }
        }
        case FETCH_CURRENCY_RATES_SUCCESS: {
            const { currencyData } = action;

            // Note: performance improvment
            const oldRates = state.currencyRates;
            const areResultsEqual = isequal(oldRates, currencyData);

            if (areResultsEqual) {
                return state;
            }

            return {
                ...state,
                currencyRates: currencyData,
                isLoading: false
            }
        }
        case FETCH_CURRENCY_RATES_FAILURE: {
            return {
                ...state,
                isError: true,
                isLoading: false
            }
        }
        default:
            return state;
    }
}

export default shoppingListReducer;

export const addStoreToData = (storesData, product) => {
    let updatedStoresData;
    const { storeName, price } = product;

    if (storesData?.hasOwnProperty(storeName)) {
        updatedStoresData = {
            ...storesData,
            [storeName]: {
                ...storesData[storeName],
                totalSum: storesData[storeName].totalSum + price,
                itemsCounter: storesData[storeName].itemsCounter + 1,
            }
        }
    }
    else {
        updatedStoresData = {
            [storeName]: {
                totalSum: price,
                itemsCounter: 1
            }
        }
    }

    return updatedStoresData;
}

export const removeItemFromStoreData = (storesData, product) => {
    let updatedStoresData = {};
    const { storeName, price } = product;

    if (storesData[storeName]?.itemsCounter > 1) {
        updatedStoresData = {
            ...storesData,
            [storeName]: {
                ...storesData[storeName],
                totalSum: storesData[storeName].totalSum - price,
                itemsCounter: storesData[storeName].itemsCounter - 1,
            }
        }
    }
    else {
        updatedStoresData = {
            ...storesData,
        }
        delete updatedStoresData[storeName]
    }

    return updatedStoresData;
}

export const sortItemsByDate = itemsList => itemsList.sort((a, b) => new Date(a.deliveryDate) - new Date(b.deliveryDate));

export const convertPriceByCurrency = (price, convertRate) => parseFloat((price * convertRate).toFixed(2))
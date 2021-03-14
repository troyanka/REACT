
export const addStoreToData = (storesData, product) => {
    let updatedStoresData = { ...storesData };
    const { storeName, price } = product;

    if (updatedStoresData[storeName]) {
        updatedStoresData[storeName] = {
            totalSum: updatedStoresData[storeName].totalSum += price,
            itemsCounter: updatedStoresData[storeName].itemsCounter + 1,
        }
    }
    else {
        updatedStoresData[storeName] = {
            totalSum: price,
            itemsCounter: 1
        }
    }

    return updatedStoresData;
}

export const removeItemFromStoreData = (storesData, product) => {
    let updatedStoresData = { ...storesData };
    const { storeName, price } = product;

    if (updatedStoresData[storeName].itemsCounter > 1) {
        updatedStoresData[storeName] = {
            totalSum: updatedStoresData[storeName].totalSum -= price,
            itemsCounter: updatedStoresData[storeName].itemsCounter - 1,
        }
    }
    else {
        delete updatedStoresData[storeName]
    }

    return updatedStoresData;
}

export const sortItemsByDate = itemsList => itemsList.sort((a, b) => new Date(a.deliveryDate) - new Date(b.deliveryDate));

export const convertPriceByCurrency = (price, convertRate) => parseFloat((price * convertRate).toFixed(2))
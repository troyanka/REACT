import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './AddItemForm.scss';
import { productAdd } from '../../actions/shoppingListActions';
import { CURRENCY_NAMES } from '../../constants/currencyNames';
import { STORE_NAMES } from '../../constants/storeNames';
import { Button } from '../Button/Button';

export const AddItemForm = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState();
    const [storeName, setStoreName] = useState(STORE_NAMES[0].displayName);
    const [price, setPrice] = useState(0);

    const currentDate = new Date();
    const defaultDate = currentDate.toISOString().substr(0, 10); //Today date
    const [deliveryDate, setDeliveryDate] = useState(defaultDate);

    const handleProductAdd = e => {
        e.preventDefault();

        const newProd = {
            name,
            storeName,
            price,
            deliveryDate
        }

        dispatch(productAdd(newProd))
    }

    const handlePriceChange = e => setPrice(parseFloat(e.target.value));
    const handleDeliveryDateChange = e => setDeliveryDate(e.target.value);
    const handleProdNameChange = e => setName(e.target.value);

    return (
        <section className="all-items-container">
            <h3>Please add new Item</h3>
            <form onSubmit={handleProductAdd}>

                <div>
                    <label htmlFor="prod-name">Product name: </label>
                    <input type="text" id="prod-name" name="name" value={name}
                        onChange={handleProdNameChange} required />
                </div>

                <div>
                    <label htmlFor="store-name">Store name:</label>
                    <select id="store-name" name="storeName"
                        value={storeName}
                        onChange={e => setStoreName(e.target.value)}>
                        {STORE_NAMES.map(store => <option key={store.value} value={store.value}>{store.displayName}</option>)}
                    </select>
                </div>

                <div>
                    <label htmlFor="prod-price">Price ({CURRENCY_NAMES.USD}):</label>
                    <input type="number" id="prod-price" step="any" min={0} name="price"
                        value={price}
                        onChange={handlePriceChange} required />
                </div>

                <div>
                    <label htmlFor="prod-delivery">Delivery Date</label>
                    <input type="date" id="prod-delivery" name="deliveryDate" defaultValue={deliveryDate}
                        onChange={handleDeliveryDateChange} />
                </div>

                <Button type='submit' text='Add' />
            </form>
        </section>
    );
};
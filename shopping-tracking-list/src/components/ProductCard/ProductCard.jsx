import React from 'react';
import Moment from 'react-moment';
import './ProductCard.scss';
import { convertPriceByCurrency } from '../../utilities/utilities';
import { CURRENCY_NAMES } from '../../constants/currencyNames';
import { PRODUCT_STATUSES } from '../../constants/productStatuses';
import { Button } from '../Button/Button';

export const ProductCard = ({ name, status, storeName, price, deliveryDate, onBtnClick, buttonText, currenciesToDisplay, currencyRates }) => {

    return (
        <div className='product-card'>
            <h3 className='product-title'>{name}</h3>
            <div className='product-base-info'>
                <p className='product-info-piece'>
                    <span className='field-name'>Delivery Date:</span>
                    <span className='field-data'>
                        <Moment format="DD/MM/YYYY">
                            {deliveryDate}
                        </Moment>
                    </span>
                </p>
                <p className='product-info-piece'>
                    <span className='field-name'>Store Name:</span>
                    <span className='field-data'>{storeName}</span>
                </p>
                <p className='product-info-piece'>
                    <span className='field-name'>Base price:</span>
                    <span className='field-data'> {price} {CURRENCY_NAMES.USD}</span>
                </p>
            </div>
            <div className="prod-price-board">
                Converted to currencies:
                     <ul className='foreign-currencies'>
                    {currencyRates && currenciesToDisplay.map(currency => (
                        <li key={currency}>
                            {currency}: {convertPriceByCurrency(price, currencyRates[currency])}
                        </li>
                    ))}
                </ul>
            </div>
            {status !== PRODUCT_STATUSES.RECEIVED && <Button onBtnClick={onBtnClick} text={buttonText} />}
        </div >
    );
};
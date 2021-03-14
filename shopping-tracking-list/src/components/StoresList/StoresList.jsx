import React from 'react';
import './StoresList.scss';
import { CURRENCY_NAMES } from '../../constants/currencyNames';

export const StoresList = ({storesData}) => {

    const storeNames = storesData !== null && Object.keys(storesData);

    return (
        <section className="stores-list">
            {
                storeNames.length > 0 ?
                    <table>
                        <thead>
                            <tr>
                                <th>Store Name</th>
                                <th>Bought items</th>
                                <th>Total Items Bought</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                storeNames.map(storeName => (
                                    <tr className='store-card' key={storeName}>
                                        <td className='store-name'>{storeName}</td>
                                        <td className='store-purchases-sum'>{storesData[storeName].itemsCounter}</td>
                                        <td className='store-purchases-sum'>{storesData[storeName].totalSum} {CURRENCY_NAMES.USD}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    : <div className='no-purchase-history'>No Purchases history</div>
            }
        </section>
    );
};
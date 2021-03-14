import React from 'react';
import { useDispatch } from 'react-redux';
import { ProductCard } from '../ProductCard/ProductCard';
import { productReceived } from '../../actions/shoppingListActions';
import { CURRENCY_NAMES } from '../../constants/currencyNames';
import './ProductsGrid.scss';

export const ProductsGrid = ({ items, currencyRates }) => {

    const dispatch = useDispatch();
    const handleReceivedProdClick = id => dispatch(productReceived(id));

    return (
        <>
            {
                items.length > 0 ? (
                    <section className="products-grid">
                        {
                            items.map(item => (
                                <ProductCard
                                    key={item.id}
                                    onBtnClick={() => { handleReceivedProdClick(item.id) }}
                                    buttonText='Received'
                                    currenciesToDisplay={[CURRENCY_NAMES.ILS, CURRENCY_NAMES.JPY]}
                                    currencyRates={currencyRates}
                                    {...item} />
                            ))
                        }
                    </section>)
                    : <div>No items yet...</div>
            }
        </>
    );
};
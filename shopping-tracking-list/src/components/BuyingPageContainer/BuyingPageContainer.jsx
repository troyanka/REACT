import React from 'react';
import AddedProdsInfoTabs from '../AddedProdsInfoTabs/AddedProdsInfoTabs';
import { AddItemForm } from '../AddItemForm/AddItemForm';
import { LinksSection } from '../LinksSection/LinksSection';
import rightArrow from '../../images/right_arrow.jpg';

export const BuyingPageContainer = () => {

    return (
        <div>
            <LinksSection text='View Received' imageSrc={rightArrow} linkTo="/received"/>
            <AddedProdsInfoTabs />
            <AddItemForm />
        </div>
    );
};
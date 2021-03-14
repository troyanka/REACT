import * as React from 'react';
import { LinksSection } from '../LinksSection/LinksSection';
import ReceivedProdsInfoTabs from '../ReceivedProdsInfoTabs/ReceivedProdsInfoTabs';
import leftArrow from '../../images/left_arrow.jpg';

export const ReceivedListContainer = () => {

    return (
        <div>
            <LinksSection text='View Bought' imageSrc={leftArrow} linkTo="/list"/>
            <ReceivedProdsInfoTabs />
        </div>
    );
};
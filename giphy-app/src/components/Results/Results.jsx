import React from 'react';
import { useSelector } from 'react-redux';
import GiphCard from '../GiphCard/GiphCard';
import './Results.scss';
import { sortByField } from '../../utilities/utilities';

const Results = () => {
    const giphs = useSelector(({ gihpyState }) => gihpyState.giphs) || [];
    const sortValue = useSelector(({ gihpyState }) => gihpyState.sortValue);
    const sortedGiphs = sortByField(giphs, sortValue);

    return (
        <section className="results-wrapper">
            {sortedGiphs?.map(giph => <GiphCard cardInfo={giph} key={giph.id}/>)}
        </section>
    );
}

export default Results;
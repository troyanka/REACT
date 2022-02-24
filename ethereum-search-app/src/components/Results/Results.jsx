import React from 'react';
import { useSelector } from 'react-redux';
import GiphCard from '../GiphCard/GiphCard';
import './Results.scss';

const Results = () => {
    const giphs = useSelector(({ gihpyReducer }) => gihpyReducer.giphs) || [];

    return (
        <section className="results-wrapper">
            {giphs?.map(giph => <GiphCard cardInfo={giph} key={giph.id} />)}
        </section>
    );
}

export default Results;
import React, { Component } from 'react';
import SearchContainer from './Search/SearchContainer';

const BookFinder = () => {
    return (
        <>
            <head>
                <h1>Best Book Searcher</h1>
            </head>
            <main>
                <SearchContainer />
                <section className='search-results'>Results</section>
            </main>
            <footer></footer>
        </>
    );
}

export default BookFinder;
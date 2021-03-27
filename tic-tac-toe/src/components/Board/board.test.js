import { render, cleanup } from '@testing-library/react';
import { Board } from './Board';

afterEach(() => {
    cleanup();
})

it('board cell click', () => {
    render(<Board />)

    const boardCells = document.querySelectorAll(".board-row .board-cell");
    let elements = Array.from(boardCells);

    let isAllEmpty = elements.every(elem => elem.innerHTML === '');
    expect(isAllEmpty).toBe(true);
})
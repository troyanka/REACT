import { cleanup } from '@testing-library/react';
import { buildBoard, checkIfWinner } from './utilities';

afterEach(() => cleanup());
/*** WINNER CHECK ***/
it('Check If Winner test1', () => {

    const boardExample = [
        [],
        [],
    ];

    const result = checkIfWinner(boardExample);
    expect(result).toBe(-1);
})

it('Check If Winner test2', () => {

    const boardExample = [
        ['x', 'o', 'x'],
        [null, null, null],
        ['x', 'o', 'x']
    ];

    const result = checkIfWinner(boardExample);
    expect(result).toBe(false);
})

it('Check If Winner test2', () => {

    const boardExample = [
        ['x', 'x', ''],
        [null, 'x', null],
        ['x', 'x', '']
    ];

    const result = checkIfWinner(boardExample);
    expect(result).toBe(true);
})

it('Check If Winner test2', () => {

    const boardExample = [
        ['x', 'x', ''],
        [null, '', null],
        ['x', 'x', '']
    ];

    const result = checkIfWinner(boardExample);
    expect(result).toBe(false);
})

/*** BOARD BUILDING ***/
it('buildBoard functions test1', () => {
    const board = buildBoard(0);

    expect(board.length).toBe(0);
    expect(typeof board).toBe('object');
})

it('buildBoard functions test2', () => {
    const board = buildBoard('test');

    expect(board.length).toBe(0);
    expect(typeof board).toBe('object');
})

it('buildBoard functions test3', () => {
    const board = buildBoard(1.2);

    expect(board.length).toBe(2);
    expect(typeof board).toBe('object');
})
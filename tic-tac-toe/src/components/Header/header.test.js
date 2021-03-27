import { render, screen, cleanup } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import { Header } from './Header';

afterEach(() => {
    cleanup();
})

it('Header component renders without crash', () => {
        render(<Header/>)
        const headerElement = screen.getByTestId('header-app');
        expect(headerElement).toBeInTheDocument();
        expect(headerElement).toHaveTextContent('Game');
})
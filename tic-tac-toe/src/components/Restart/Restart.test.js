import { render, screen, cleanup } from '@testing-library/react';
import { Restart } from './Restart';

afterEach(() => cleanup());

it('Restart component renders without crashing', () => {
    render(<Restart />)

    const restartElement = screen.getByTestId('restart-btn');
    expect(restartElement).toBeInTheDocument();
    expect(restartElement).toHaveTextContent('Restart');
})
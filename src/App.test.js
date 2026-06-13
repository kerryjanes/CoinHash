// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CoinHash title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CoinHash/i);
    expect(titleElement).toBeInTheDocument();
});

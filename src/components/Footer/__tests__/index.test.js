import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from '..';

afterEach(cleanup);

describe('Footer component', () => {
    it('renders', () => {
        render(<Footer />);
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<Footer />);
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('links are visible', () => {
    it('inserts text into links', () => {
        const { getByTestId } = render(<Footer />);

        expect(getByTestId('github')).toHaveTextContent('GitHub');
        expect(getByTestId('linkedin')).toHaveTextContent('LinkedIn');
        expect(getByTestId('stackoverflow')).toHaveTextContent('Stack Overflow');
    });
});
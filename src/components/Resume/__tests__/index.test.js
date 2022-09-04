import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Resume from '..';

afterEach(cleanup);

describe('Resume component', () => {
    it('renders', () => {
        render(<Resume />);
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<Resume />);
        
        expect(asFragment()).toMatchSnapshot();
    });
});

// Test template from App.test.js that the Create React App CLI came with.
test('renders download my resume link', () => {
    render(<Resume />);
    const linkElement = screen.getByText(/Download my resume./i);
    expect(linkElement).toBeInTheDocument();
});
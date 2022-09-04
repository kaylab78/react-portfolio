import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navigation from '..';

afterEach(cleanup);

describe('Navigation component', () => {
    it('renders', () => {
        render(<Navigation />);
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<Navigation />);
        expect(asFragment()).toMatchSnapshot();
    });
});

test('renders navigation links', () => {
    render(<Navigation />);
    const aboutLink = screen.getByText(/About Me/i);
    const portfolioLink = screen.getByText(/Portfolio/i);
    const contactLink = screen.getByText(/Contact Me/i);
    const resumeLink = screen.getByText(/Resume/i);
    
    expect(aboutLink).toBeInTheDocument();
    expect(portfolioLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
    expect(resumeLink).toBeInTheDocument();
})
import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PageContent from '..';

afterEach(cleanup);

describe('PageContent component', () => {
    it('renders', () => {
        render(<PageContent />);
    });
})
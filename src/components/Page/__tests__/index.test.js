import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Page from '..';

afterEach(cleanup);

describe('Page component', () => {
    it('renders', () => {
        render(<Page />);
    });
});
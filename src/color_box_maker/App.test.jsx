import { render } from '@testing-library/react';
import App from './App';
import { describe, it, expect } from 'vitest';

describe('App', () => {
    //smoke test
    it('renders App component', () => {
        render(<App/>);
    })

    //snapshot test
    it('matches snapshot', () => {
        const {asFragment} = render(<App/>);
        expect(asFragment()).toMatchSnapshot();
    })
})
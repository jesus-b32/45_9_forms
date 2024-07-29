import { render, fireEvent } from '@testing-library/react';
import Box from './Box';
import { describe, it, expect, vi } from 'vitest';

describe('Box', () => {
    //smoke test
    it('renders App component', () => {
        render(<Box/>);
    })

    //snapshot test
    it('matches snapshot', () => {
        const {asFragment} = render(<Box/>);
        expect(asFragment()).toMatchSnapshot();
    })

    it("runs the removeHandle function on button click", function() {
        const removeMock = vi.fn();
        const { getByText } = render(<Box handleRemove={removeMock} />);
        const deleteButton = getByText("Remove Box");
        fireEvent.click(deleteButton);
        expect(removeMock).toHaveBeenCalled();
    });
})
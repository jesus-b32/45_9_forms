import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';
import { describe, it, expect, vi } from 'vitest';

describe('Box', () => {

    function addBox(boxList, height = "5", width = "5", color = "red") {
        const heightInput = boxList.getByLabelText("Height:");
        const widthInput = boxList.getByLabelText("Width:");
        const backgroundInput = boxList.getByLabelText("Background Color:");
        fireEvent.change(backgroundInput, { target: { value: color } });
        fireEvent.change(widthInput, { target: { value: width } });
        fireEvent.change(heightInput, { target: { value: height } });
        const button = boxList.getByText("Add a new Box");
        fireEvent.click(button);
    }
    //smoke test
    it('renders App component', () => {
        render(<BoxList/>);
    })

    //snapshot test
    it('matches snapshot', () => {
        const {asFragment} = render(<BoxList/>);
        expect(asFragment()).toMatchSnapshot();
    })

    it("can add a new box", function() {
        const boxList = render(<BoxList />);
        // no boxes yet
        expect(boxList.queryByText("Remove Box")).not.toBeInTheDocument();
        addBox(boxList);
        // expect to see a box
        const removeButton = boxList.getByText("Remove Box");
        expect(removeButton).toBeInTheDocument();
        expect(removeButton.previousSibling).toHaveStyle(`
            width: 5em;
            height: 5em;
            background-color: rgb(255, 0, 0);
        `);
        // expect form to be empty
        expect(boxList.getAllByDisplayValue("")).toHaveLength(3);
    });

    it("can remove a box", function() {
        const boxList = render(<BoxList />);
        addBox(boxList);
        const removeButton = boxList.getByText("Remove Box");
        // click the remove button and the box should be gone
        fireEvent.click(removeButton);
        expect(removeButton).not.toBeInTheDocument();
    });
})
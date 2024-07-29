import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";

describe('NewBoxForm', () => {
    //smoke test
    it('renders App component', () => {
        render(<NewBoxForm/>);
    })

    //snapshot test
    it('matches snapshot', () => {
        const {asFragment} = render(<NewBoxForm/>);
        expect(asFragment()).toMatchSnapshot();
    })

    it("runs the addBox function on form submit", function() {
        const createMock = vi.fn();
        const { getByText } = render(<NewBoxForm addBox={createMock} />);
        const createButton = getByText("Add a new Box");
        fireEvent.click(createButton);
        expect(createMock).toHaveBeenCalled();
    });
})

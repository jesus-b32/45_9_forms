import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

/** Form for creating a new box to add to a list.
 *
 * Has state for the backgroundColor, width, and height of the box; 
 * on submission, sends {backgroundColor, width, height} to fn rec'd from parent.
 *
 */

function NewBoxForm ({ addBox }) {
    const INITIAL_STATE = {
        backgroundColor: '',
        width: '',
        height: ''
    }

    /**
     * formDate is an object that holds 
     *  backgroundColor
     *  width
     *  height
     *  */
    const [formData, setFormData] = useState(INITIAL_STATE);

    /** Update local state w/curr state of input elem */
    function handleChange (event) {
        const { name, value } = event.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    /** Send {backgroundColor, width, height} to parent
    *    & clear form. */
    function handleSubmit (event) {
        event.preventDefault();
        addBox({ ...formData, id: uuid() });
        setFormData(INITIAL_STATE);
    }

    /** render form */
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="backgroundColor">Background Color: </label>
            <input
                id="backgroundColor"
                type="text"
                name="backgroundColor"
                placeholder="Background Color"
                value={formData.backgroundColor}
                onChange={handleChange}
            />
            <label htmlFor="width">Width: </label>
            <input
                id="width"
                type="number"
                min={1}
                max={25}
                name="width"
                placeholder="Width"
                value={formData.width}
                onChange={handleChange}
            />
            <label htmlFor="height">Height: </label>
            <input
                id="height"
                type="number"
                min={1}
                max={25}
                name="height"
                placeholder="Height"
                value={formData.height}
                onChange={handleChange}
            />
            <button>Add a new Box</button>
        </form>
    )

}

export default NewBoxForm;
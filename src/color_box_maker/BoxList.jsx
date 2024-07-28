import React, { useState } from "react";
import Box from './Box';
import NewBoxForm from './NewBoxForm';

function BoxList () {
    // boxes is an array of box objects
    const [boxes, setBoxes] = useState([]);

    //update state by adding current boxes and newBox, made from form data, to setState
    function addBox (newBox) {
        setBoxes(boxes => [...boxes, newBox]);
    }

    // filter out box with matching id
    function removeBox (id) {
        setBoxes(boxes => boxes.filter(box => box.id !== id));
    }

    // create box compnents from boxes state
    const boxComponents = boxes.map(box => (
        <Box
            key={box.id}
            id={box.id}
            width={box.width}
            height={box.height}
            backgroundColor={box.backgroundColor}
            handleRemove={removeBox}
        />
    ));

    // render the form and box compnents
    return (
        <div>
            <h3>Box List</h3>
            <NewBoxForm addBox = {addBox}/>
            {boxComponents}
        </div>
    )
}

export default BoxList;
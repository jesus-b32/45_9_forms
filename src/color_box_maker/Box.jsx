import React from "react";

/**
 * this component should display a div with a background color, width and height based on the props passed to it.
 * @param {Object} {color, width, height} 
 * @returns box component
 */
function Box ({id, backgroundColor, width, height, handleRemove}) {
    const boxStyle = {
        backgroundColor,
        width: `${width}em`,
        height: `${height}em`
    }

    // handle removing a box when click event happens
    const removeHandle = () => handleRemove(id);

    return (
        <div>
            <div style={boxStyle}></div>
            <button onClick={removeHandle}>Remove Box</button>
        </div>
    )
}


export default Box;
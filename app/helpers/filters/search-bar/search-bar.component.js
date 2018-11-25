import React from "react";

/**
* chages search text value in redux 
* @param {Function} setSearchText in filter.action
*/
const handleKeyDown = (event, props) => {
    props.setSearchText(
        event.target.value
    );
}

export default (props) => (
    <div onKeyUp={(event) => handleKeyDown(event, props)}>
        Search:<br/>
        <input type="text" />
    </div>
);
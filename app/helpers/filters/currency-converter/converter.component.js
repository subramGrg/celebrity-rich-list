import React from "react";

/**
 * chages currecncy value in redux
 * @param {Object} props
 */
const handleChange = (event, props) => {
    props.setCurrenyType(
        event.target.value
    )
}

export default (props) => (
    <div onChange={(event) => handleChange(event, props)}>

        Currency Converter:<br/>
        <select>
            <option value="us">US Dollar </option>
            <option value="aus">Australian Dollar</option>
            <option value="euro">Euro</option>
        </select>

    </div>  
);
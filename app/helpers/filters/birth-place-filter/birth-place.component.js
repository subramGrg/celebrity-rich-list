import React from "react";

/**
 * chages birth place value in redux 
 * @param {Function} setDestination in filter.action
 * @memberof Filter
 */
const handleChange = (event, props) => {
    props.setDestination(
        event.target.value.toLowerCase()
    );
}

export default (props) => (
    <div onChange={(event) => handleChange(event, props)}>

        Birthplace:<br/>
        <select>
            <option>Show All</option>
            <option>Australia</option>
            <option>Israel</option>
            <option>Italy</option>
            <option>Poland</option>
            <option>India</option>
            <option>Brazil</option>
            <option>Canada</option>
            <option>South Africa</option>
            <option>Netherlands</option>
            <option>United Kingdom</option>
            <option>France</option>
            <option>Tunisia</option>
            <option>Germany</option>
            <option>Ireland</option>
            <option>Saudi Arabia</option>
        </select>

    </div>
);
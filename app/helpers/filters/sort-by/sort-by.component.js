import React from "react";

/**
 * chages sort by value in redux
 * @param {Function} setSortBy in filter.action
 */
const handleChange = (event, props) => {
    props.setSortBy(
        event.target.value.toLowerCase()
    )
}

export default (props) => (
    <div onChange={(event) => handleChange(event, props)}>
        Order by:<br/>
        <select>
            <option>Rank</option>
            <option>Age</option>
            <option>Name</option>
        </select>
    </div>
);
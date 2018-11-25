import React from "react";

import "./card.scss";

class Celebrities extends React.Component {
    constructor(props) {
        super(props);
    }

    /**
     * Creates celebrity card
     * @param {Object} celeb
     * @param {Number} index
     * @memberof Celebrities
     */
    celebCard(celeb, index) {
        const {
            name,
            rank,
            age,
            country,
        } = celeb;

        return <div key={index}
            styleName="card">

            <h3>No: {rank}</h3>
            <ul>
                <li>Name: {name} </li>
                <li>Net Worth: {this.getNetWorth(celeb)}</li>
                <li>Age: {age}</li>
                <li>Country of Birth: {country}</li>
            </ul>
        </div>
    }

    /**
     * Creates currency info
     * @param {String} netWorth
     * @memberof Celebrities
     */
    getNetWorth({ netWorth, }) {
        const {
            usRate,
            auRate,
            euroRate,
            currency,
        } = this.props;
        
        switch (currency) {
            case "aus":
                return `$${netWorth*auRate}`;

            case "euro":
                return `${String.fromCharCode(8364)}${netWorth*euroRate}`;

            default:
                return `$${netWorth*usRate}`;
        }
    }

    /**
     * Creates list of celeb cards
     * @memberof Celebrities
     */
    createCelebCard() {
        const {
            list,
        } = this.props; 

        return list.map((celeb, index) => 
            this.celebCard(celeb, index)
        );
    }

    render() {
        return(this.createCelebCard());
    }
}

export default Celebrities;
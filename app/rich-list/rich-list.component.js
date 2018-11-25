import React from "react";
import autobind from "autobind-decorator";

import Celebrities from "./sub-component/celebrities.container";
import Filters from "filters/filter.container";

import "./rich-list.scss";

class RichList extends React.Component {
    constructor(props) {
        super(props);
    }

    /**
     * @property { Function } getCelebrities in filters.actions
     * @memberof RichList
     */
    componentDidMount() {
        const {
            getCelebrities,
        } = this.props;

        // get celebrities list
        getCelebrities();
    }

    /**
     * Check celebs in list
     * @memberof RichList
     */
    @autobind
    checkCelebList() {
        const {
            list,
        } = this.props;

        if(list.length < 1) {
            return <div styleName="results">
                no results found
            </div>;
        }

        return <Celebrities
                list={list} />;
    }
    
    render() {
        const {
            spinner,
        } = this.props;

        const celebList = (spinner) ?
            <div styleName="spinner">
                Loading
            </div> : 
            this.checkCelebList();

        return(
        <div styleName="wrapper">
            <div styleName="intro">
                <h1>Technical Test</h1>
                <h2>Celebrity Rich List</h2>
                <p>A list of the Top 50 Richest Celebrities of 2014</p>
                <p>
                    Reference: 
                    <a href="http://www.therichest.com/top-lists/top-100-richest-celebrities/">
                        http://www.therichest.com/top-lists/top-100-richest-celebrities/
                    </a>
                </p>
            </div>

            <div styleName="list_wrapper">
                <Filters />
                
                {celebList}
            </div>
        </div>
        );
    }
}

export default RichList;
import React from "react";

import { 
    SearchFilter, 
    BirthPlaceFilter,
    CurrencyConverterFilter,
    SortByFilter
} from "helpers";
import "./filter.scss";

export default () => (
    <div styleName="container">
        <div styleName="wrapper">

            <BirthPlaceFilter />

            <CurrencyConverterFilter />

        </div>

        <div styleName="wrapper bottom">
            
            <SearchFilter/>
            
            <SortByFilter />

        </div>
    </div>
);
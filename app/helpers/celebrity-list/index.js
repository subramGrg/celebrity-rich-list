import _ from "underscore";

/**
 * filters celebrity list based on filters selected in UI
 * @param {Object} store reduxt store
*/
export const celebrityList = (store) => {
    const {
        filtersReducer,
    } = store;
    
    const searchText = filtersReducer.searchText;
    const destination = filtersReducer.destination;
    const sortBy = filtersReducer.sortBy;
    let filterdList = filtersReducer.celebrities;

    if (searchText) {
        filterdList = filterdList.filter(celeb => 
            celeb.name.toLowerCase().includes(searchText) ||
            celeb.country.toLowerCase().includes(searchText) ||
            celeb.age.toLowerCase().includes(searchText) ||
            celeb.netWorth.toString().includes(searchText)
        );
    }

    if (destination && destination !== "show all") {
        filterdList = filterdList.filter(celeb => 
            celeb.country.toLowerCase() === destination
        );
    }

    if (sortBy) {
        filterdList = _.sortBy(filterdList, celeb => celeb[sortBy]);
    }

    return filterdList;
};
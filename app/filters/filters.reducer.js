const initialState = {
    celebrities: [],
    spinner: true,
    searchText: null,
    destination: null,
    sortBy: null,
    usRate: 0,
    auRate: 0,
    euroRate: 0,
    currency: "us"
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_CELEBRITIES":
            return {
                ...state,
                celebrities: action.payload,
            };
        
        case "SET_SPINNER":
            return {
                ...state,
                spinner: action.payload,
            }
        
        case "SET_SEARCH_TEXT":
            return {
                ...state,
                searchText: action.payload,
            }

        case "SET_DESTINATION":
            return {
                ...state,
                destination: action.payload,
            }

        case "SET_SORT_BY":
            return {
                ...state,
                sortBy: action.payload,
            }
        
        case "SET_CURRENCY":
            return {
                ...state,
                auRate: action.payload.aus,
                usRate: action.payload.us,
                euroRate: action.payload.euro,
            }

        case "SET_CURRENCY_TYPE":
            return {
                ...state,
                currency: action.payload,
            }

        default:
            return state;
    }
};
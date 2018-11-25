export const setSearchText = (payload) => ({
    type: "SET_SEARCH_TEXT",
    payload,
});

export const setDestination = (payload) => ({
    type: "SET_DESTINATION",
    payload,
});

export const setSortBy = (payload) => ({
    type: "SET_SORT_BY",
    payload,
});

export const setCurreny = (payload) => ({
    type: "SET_CURRENCY",
    payload: {
        aus: payload.ausRate,
        us: payload.usRate,
        euro: payload.euroRate,
    },
});

export const setCurrenyType = (payload) => ({
    type: "SET_CURRENCY_TYPE",
    payload,
})
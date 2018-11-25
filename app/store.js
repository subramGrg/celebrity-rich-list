import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

import filtersReducer from "./filters/filters.reducer";
import filterMiddleware from "./filters/filters.middleware";

const middlewares = [filterMiddleware];

if (process.env.NODE_ENV !== "production") {
    middlewares.push(
        createLogger({
            collapsed: true,
        })
    );
}

const reducers = combineReducers({
    filtersReducer,
});

const store = createStore(reducers, applyMiddleware(thunk, ...middlewares));

export default store;
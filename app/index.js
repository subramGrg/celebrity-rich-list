import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "store";
import RichList from "rich-list/rich-list.container";

ReactDOM.render(
    <Provider store={store}>
        <RichList />
    </Provider>,
    document.getElementById("root")
);
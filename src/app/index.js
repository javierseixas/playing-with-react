import React from "react";
import { render } from "react-dom";
import {createStore} from "redux";
import {App} from "./components/App"

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            state = state + action.payload;
            break;
        case "SUBSTRACT":
            break;
    }
    return state;
};

const store = createStore(reducer, 1);

store.subscribe(() => {
    console.log("Store updated!", store.getState());
});


store.dispatch({
    type: "ADD",
    payload: 10
});


render(<App />, window.document.getElementById("app"));
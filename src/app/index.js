// import React from "react";
// import { render } from "react-dom";
// import {BrowserRouter as Router, Route, browserHistory} from "react-router-dom";
// import createBrowserHistory from 'history/createBrowserHistory';
//
// export const customHistory = createBrowserHistory();
//
// import { Home } from "./components/Home"
// import { EmptyHome } from "./components/EmptyHome"
// import { Root } from "./components/Root"
// import { Section } from "./components/Section"
//
// class App extends React.Component {
//
//     constructor() {
//         super();
//         this.state = {
//             headerTitle: "Home",
//         }
//     }
//
//     onChangeHeaderTitle(newTitle) {
//         this.setState({
//             headerTitle: newTitle
//         })
//     }
//
//     render() {
//         return (
//             <Router history={customHistory}>
//                 <div>
//                     <Route path="/" component={Root} />
//                     <Route exact path="/" component={EmptyHome} />
//                     <Route path="/section/:id" component={Section} />
//                     <Route path="/home" component={EmptyHome} />
//                 </div>
//             </Router>
//         );
//     }
// }
//
// render(<App />, window.document.getElementById("app"));

import {createStore} from "redux";

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
import React from "react";
import {BrowserRouter as Router, Route, browserHistory} from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory';

export const customHistory = createBrowserHistory();

import { EmptyHome } from "./EmptyHome"
import { Root } from "./Root"
import { Section } from "./Section"
import {Home} from "./Home";

export class App extends React.Component {

    constructor() {
        super();
    }

    onChangeHeaderTitle(newTitle) {

    }

    render() {
        return (
            <Router history={customHistory}>
                <div>
                    <Route path="/" component={Root} />
                    <Route exact path="/" component={Home} />
                    <Route path="/section/:id" component={Section} />
                    <Route path="/home" component={Home} />
                </div>
            </Router>
        );
    }
}

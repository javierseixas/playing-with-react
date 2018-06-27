import React from "react";
import { render } from "react-dom";
import {BrowserRouter as Router, Route, browserHistory} from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory';

export const customHistory = createBrowserHistory();

import { Home } from "./components/Home"
import { EmptyHome } from "./components/EmptyHome"
import { Root } from "./components/Root"
import { Section } from "./components/Section"

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            headerTitle: "Home",
        }
    }

    onChangeHeaderTitle(newTitle) {
        this.setState({
            headerTitle: newTitle
        })
    }

    render() {
        return (
            <Router history={customHistory}>
                <div>
                    <Route path="/" component={Root} />
                    <Route exact path="/" component={EmptyHome} />
                    <Route path="/section" component={Section} />
                    <Route path="/home" component={EmptyHome} />
                </div>
            </Router>
        );
    }
}

render(<App />, window.document.getElementById("app"));


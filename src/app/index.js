import React from "react";
import { render } from "react-dom";

import { Home } from "./components/Home"
import { Header } from "./components/Header"

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
            <div>
                <Header name={this.state.headerTitle} />
                <Home name="Javier" age="34" changeHeaderTitle={this.onChangeHeaderTitle.bind(this)} />
            </div>
        );
    }
}

render(<App />, window.document.getElementById("app"));


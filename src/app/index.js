import React from "react";
import { render } from "react-dom";

import { Home } from "./components/Home"
import { Header } from "./components/Header"

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Home />
            </div>
        );
    }
}

render(<App />, window.document.getElementById("app"));


import React from "react";

import {Header} from "./Header"

export class Root extends React.Component {
    render() {
        return (
            <div>
                <Header name="Hola" />
                {this.props.children}
            </div>
        );
    }
}

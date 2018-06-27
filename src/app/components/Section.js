import React from "react";
import {customHistory} from "../index";

export class Section extends React.Component {

    onNavigateHome() {
        console.log("Going!")
        customHistory.push("/home");
        console.log("Gone!")

    }

    render() {

        return (
            <div>
                <h2>Section page</h2>
                <button onClick={this.onNavigateHome}>Go home!</button>
            </div>
        );
    }
};

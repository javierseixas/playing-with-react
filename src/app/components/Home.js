import React from "react";

export class Home extends React.Component {

    constructor(props) {
        super();
        this.age = props.age;
    }

    onMakeMeYounger() {
        this.age -= 1;
    }

    render() {
        return(
            <div>
                <h2>Home</h2>
                <p>My name is {this.props.name} and I'm {this.age}</p>
                <hr />
                <button onClick={this.onMakeMeYounger.bind(this)}>Make me younger!</button>
            </div>
        );
    }
}



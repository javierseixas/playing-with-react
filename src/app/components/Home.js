import React from "react";

export class Home extends React.Component {

    constructor(props) {
        super();
        this.state = {
            age: props.age,
            headerName: "Changed name",
        };
    }

    onMakeMeYounger() {
        this.setState({
            age: this.state.age - 1
        });
    }

    onChangeName() {
        this.props.changeHeaderTitle(this.state.headerName);
    }

    render() {
        return(
            <div>
                <h2>Home</h2>
                <p>My name is {this.props.name} and I'm {this.state.age}</p>
                <hr />
                <button onClick={this.onMakeMeYounger.bind(this)}>Make me younger!</button>
                <hr />
                <button onClick={this.onChangeName.bind(this)}>Change Header Title!</button>
            </div>
        );
    }
}



import React from "react";

export class Home extends React.Component {

    constructor(props) {
        super();
        this.state = {
            age: props.age,
            headerName: props.initialHeaderTitle,
        };
    }

    onMakeMeYounger() {
        this.setState({
            age: this.state.age - 1
        });
    }

    onHandleChange(event) {
        this.setState({
            headerName: event.target.value
        })
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
                <input type="text" value={this.state.headerName} onChange={(event) => this.onHandleChange(event)}/><br />
                <button onClick={this.onChangeName.bind(this)}>Change Header Title!</button>
            </div>
        );
    }
}



import React, { Component } from "react";

class Test extends Component {
    constructor(props) {
        super(props)
        this.state = { name: "sania" };
        this.inputRef = React.createRef();

    }
    handlClick() {
        this.setState({
            name: "bano"
        }, () => {
            console.log(this.state.name);
        })
    }

    handleChange(e) {
        this.setState({
            name: e.target.value
        })
    }
    pressBtn() {
        console.log(this.inputRef.current.value);
        if (this.inputRef.current) {
            this.setState({
                name: this.inputRef.current.value
            })
        }

    }
    render() {

        return (
            <>
                <h1>Controlled vs Uncontrolled</h1>

                {/* Controlled Component */}
                {/* <h3>{this.state.name}</h3>
            <input type="text" value={this.state.name} onChange={this.handleChange.bind(this)}/>
            <button onClick={this.handlClick.bind(this)}>Click On Me!!!</button> */}

                <input type="text" defaultValue={this.state.name} ref={this.inputRef} />
                <button onClick={this.pressBtn.bind(this)}>Click On Me!!!</button>




            </>
        )
    }
}
export default Test;
import React from "react";

class Childcomponent extends React.Component {

    constructor(props){
        super(props)
        this.state={
            name: "",
            age: ""
        }
    }

    handleInputName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleInputAge = (e) => {
        this.setState({
            age: e.target.value
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        this.props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1),
            Name: this.state.name,
            Age: this.state.age
        })

        this.setState({
            name: "",
            age: ""
        })
    }

    render(){
        return <>
            <div>
                My name is: {this.state.name}<br/>
                Age: {this.state.age}<br/>
                Address: Nha Trang
            </div>
            <form onSubmit={(e) => this.handleOnSubmit(e)}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input value={this.state.name} id="name" type="text" onChange={(e) => {this.handleInputName(e)}}/>
                </div>
                <div>
                    <label htmlFor="age">Age: </label>
                    <input value={this.state.age} id="age" type="text" onChange={(e) => {this.handleInputAge(e)}}/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    }
}

export default Childcomponent
import React from "react";
import Childcomponent from "./Childcomponent";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

class Mycomponent extends React.Component {
    state = {
        listUser: [
            {id: 1, Name: "Dung", Age: 49 },
            {id: 2, Name: "Hoang", Age: 17 },
            {id: 3, Name: "Chien", Age: 18 },
        ]
    }

    handleAddNewUser = (user) => {
        this.setState({
            listUser: [user, ...this.state.listUser]
        })
    }

    handleDeleteUser = (id) => {
        let listUserClone = this.state.listUser
        listUserClone = listUserClone.filter(user => user.id != id)

        this.setState({
            listUser: listUserClone
        })
    }

    render() {
        return <>
            <div>
                <Childcomponent handleAddNewUser={this.handleAddNewUser}></Childcomponent>
            </div>
            <div>
                <DisplayInfor listUser={this.state.listUser} handleDeleteUser={this.handleDeleteUser}></DisplayInfor>
            </div>
        </>
    }
}

export default Mycomponent;
import React, { useState } from "react";
import Childcomponent from "./Childcomponent";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

const Mycomponent = () => {

    const [listUser, setListUser] = useState(
        [
            {id: 1, Name: "Dung", Age: 49, Address: "Nha Trang" },
            {id: 2, Name: "Hoang", Age: 17, Address: "HCM" },
            {id: 3, Name: "Chien", Age: 18, Address: "Hà Nội" },
        ]
    )

    const handleAddNewUser = (user) => {
        setListUser([user, ...listUser])
    }

    const handleDeleteUser = (id) => {
        let listUserClone = listUser
        listUserClone = listUserClone.filter(user => user.id != id)

        setListUser(listUserClone)
    }

    const handleDeleteAllUser = () => {
        setListUser([])
    }

    return <>
        <div>
            <AddUserInfor handleAddNewUser={handleAddNewUser}></AddUserInfor>
        </div>
        <div>
            <DisplayInfor listUser={listUser} handleDeleteUser={handleDeleteUser} handleDeleteAllUser={handleDeleteAllUser}></DisplayInfor>
        </div>
    </>
}

export default Mycomponent;
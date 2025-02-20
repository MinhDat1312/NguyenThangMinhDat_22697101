import React, { useEffect, useState } from "react";
import DisplayInfor from "./DisplayInfor";

const AddUserInfor = (props) => {
    const {handleAddNewUser} = props

    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [address, setAddress] = useState("")

    const handleInputName = (e) => {
        setName(e.target.value)
    }

    const handleInputAge = (e) => {
        setAge(e.target.value)
    }

    const handleInputAddress = (e) => {
        setAddress(e.target.value)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1),
            Name: name,
            Age: age,
            Address: address
        })

        setName("")
        setAge("")
        setAddress("")
    }

    return <>
        <div>
            My name is: {name}<br/>
            Age: {age}<br/>
            Address: {address}
        </div>
        <form onSubmit={(e) => handleOnSubmit(e)}>
            <div>
                <label htmlFor="name">Name: </label>
                <input value={name} id="name" type="text" onChange={(e) => {handleInputName(e)}}/>
            </div>
            <div>
                <label htmlFor="age">Age: </label>
                <input value={age} id="age" type="text" onChange={(e) => {handleInputAge(e)}}/>
            </div>
            <div>
                <label htmlFor="address">Address: </label>
                <input value={address} id="address" type="text" onChange={(e) => {handleInputAddress(e)}}/>
            </div>
            <button type="submit">Submit</button>
        </form>
    </>
}

export default AddUserInfor
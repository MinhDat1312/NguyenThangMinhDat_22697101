import React, { useEffect, useState } from "react";

const DisplayInfor = (props) => {
    const {listUser, handleDeleteUser} = props
    const [showHide, setShowHide] = useState(true)

    const handleShowHide = ()=>{
        setShowHide(!showHide)
    }


    return (<>
        <span onClick={()=>handleShowHide()} style={{cursor: "pointer"}}>
            {showHide === true ? "Hide list user" : "Show list user"}
        </span>
        <div>
                {
                    showHide === true ? listUser.map((user)=>{
                        return (
                            <div key={user.id} className={user.Age < 18 ? "red" : "blue"}>
                                My name is: {user.Name}<br/>
                                My age: {user.Age}<br/>
                                My address: {user.Address}<br/>
                                <button onClick={() => {handleDeleteUser(user.id)}}>Delete</button><hr/>
                            </div>
                        )
                    }) : null
                }
        </div>
    </>)
}

export default DisplayInfor
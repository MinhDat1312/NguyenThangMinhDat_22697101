import React, { useEffect, useState } from "react";

const DisplayInfor = (props) => {
    const {listUser, handleDeleteUser, handleDeleteAllUser} = props
    const [showHide, setShowHide] = useState(true)

    const handleShowHide = ()=>{
        setShowHide(!showHide)
    }

    useEffect(()=>{
        if(listUser.length == 0){
            setTimeout(()=>{
                alert("Bạn đã xóa hết user")
            }, 0)
        }
    },[listUser])

    return (<>
        <span onClick={()=>handleShowHide()} style={{cursor: "pointer", marginRight:"40px"}}>
            {showHide === true ? "Hide list user" : "Show list user"}
        </span>
        <span onClick={handleDeleteAllUser} style={{cursor: "pointer"}}>Delete all users</span>
        <div>
                {
                    showHide === true && listUser.length!=0 ? listUser.map((user)=>{
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
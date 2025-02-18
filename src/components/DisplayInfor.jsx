import React from "react";

class DisplayInfor extends React.Component {
    render(){
        const {listUser, handleDeleteUser} = this.props
        return<>
            <div>
                {
                    listUser.map((user)=>{
                        return (
                            <div key={user.id} className={user.Age < 18 ? "red" : "blue"}>
                                My name is: {user.Name}<br/>
                                My age: {user.Age}<br/>
                                <button onClick={() => {handleDeleteUser(user.id)}}>Delete</button><hr/>
                            </div>
                        )
                    })
                }
            </div>
        </>
    }
}

export default DisplayInfor
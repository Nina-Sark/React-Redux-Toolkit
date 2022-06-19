import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../reducers/UserSlice";

function Users() {

    const dispatch = useDispatch()

    const userData = useSelector(state => state.user.users)
    const [nameField, setNameField] = useState(null);

    const handleNewUser = () => {
        if(nameField) {
            dispatch(addUser({
                newUser : {
                    id : userData.length,
                    name : nameField
                },
                newUserId : userData.length
            }))

            setNameField("")
        }
    }

    return (
        <div>
           {userData.map(user => (
               <div key={user?.id}>{user?.name}</div>
           ))}
           <input value={nameField} onChange={e => setNameField(e.target.value)}/>
           <button onClick={handleNewUser}>Add New User</button>
        </div>
    )
}

export default Users

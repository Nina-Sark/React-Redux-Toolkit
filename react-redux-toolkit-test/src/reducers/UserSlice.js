import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users : [
        {
            id : 0,
            name : "Nina"
        }
    ],
    newUserId : 0
}

const UserSlice = createSlice({
    name : "users",
    initialState,
    reducers : {
        addUser : (state, action) => {
            const { newUser, newUserId: id } = action.payload;
            return {
                ...state,
                users : [...state.users, newUser],
                newUserId : id
            }
        }
    }
})


export const { addUser } = UserSlice.actions;

export default UserSlice.reducer;
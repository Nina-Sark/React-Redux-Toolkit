import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    posts : []
}

const PostSlice = createSlice({
    name : "posts",
    initialState,
    reducers : {
        getPosts : (state, action) => {},
        setPosts : (state, action) => {
            return {
                ...state,
                posts : action.payload
            }
        }
    }
})

export const { getPosts, setPosts } = PostSlice.actions;

export default PostSlice.reducer;


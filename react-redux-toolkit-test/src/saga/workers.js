import { call, put } from "redux-saga/effects";
import { setPosts } from "../reducers/PostSlice";
import { getPostsData } from "./postsData";

export function* handlePostsWorker(action) {
    const { title } = action.payload;
    const data = yield call(getPostsData, title);
    yield put(setPosts(data));
}
import { takeEvery } from "redux-saga/effects";
import { getPosts } from "../reducers/PostSlice";
import { handlePostsWorker } from "./workers";


export function* watcher() {
    yield takeEvery(getPosts.type, handlePostsWorker)
}
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import PostSlice from "../reducers/PostSlice";
import UserSlice from "../reducers/UserSlice";
import { watcher } from "../saga/watcher";

const sagaMiddleware = createSagaMiddleware()

const reducers = combineReducers({
      user : UserSlice,
      posts : PostSlice
})

const store = configureStore({
    reducer : reducers,
    middleware : [...getDefaultMiddleware({ thunk : false }), sagaMiddleware]
})

sagaMiddleware.run(watcher)

export default store;
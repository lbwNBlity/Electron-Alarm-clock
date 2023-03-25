import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import {  configureStore } from '@reduxjs/toolkit'

import timerReducer from './timer';

const store = configureStore({
    reducer: {
        timer: timerReducer,
    },
})
export default store;

// 从 store 本身推断出 `RootState` 和 `AppDispatch` 类型
type RootState = ReturnType<typeof store.getState>
// 推断出类型: {posts: PostsState, comments: CommentsState, users: UsersState}
type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

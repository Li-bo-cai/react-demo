import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { schoolReducer } from "./schoolSlice";
import { stuReducer } from "./stuSlice";
import studentApi from "./studentAp";

// 创建store
const store = configureStore({
    reducer: {
        student: stuReducer,
        school: schoolReducer,
        [studentApi.reducerPath]: studentApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(studentApi.middleware)
})

export default store
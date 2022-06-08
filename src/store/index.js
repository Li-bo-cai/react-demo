import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { schoolReducer } from "./schoolSlice";
import { stuReducer } from "./stuSlice";
import studentApi from "./studentAp";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

// 创建store
const store = configureStore({
    reducer: {
        student: stuReducer,
        school: schoolReducer,
        [studentApi.reducerPath]: studentApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(studentApi.middleware)
})

setupListeners(store.dispatch)   //设置以后， 将会支持 refetchOnFocus   refetchOnReconnect

export default store
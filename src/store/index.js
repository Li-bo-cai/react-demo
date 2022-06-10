import { configureStore } from "@reduxjs/toolkit";
import { schoolReducer } from "./schoolSlice";
import { stuReducer } from "./stuSlice";
import { counterReducer } from "./counterSlice ";
import studentApi from "./studentApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

// 创建store
const store = configureStore({
    reducer: {
        student: stuReducer,
        school: schoolReducer,
        counter: counterReducer,
        [studentApi.reducerPath]: studentApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }).concat(studentApi.middleware)
})

setupListeners(store.dispatch)   //设置以后， 将会支持 refetchOnFocus   refetchOnReconnect

export default store
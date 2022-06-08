import { createSlice } from "@reduxjs/toolkit";

const schoolSlice = createSlice({
    name: 'school',
    initialState: {
        name: '泸县五中',
        adress: "泸县"
    },
    reducers: {  //指定state的各种操作，直接在对象中添加方法
        setName(state, action) {
            state.name = action.payload
        },
    }
})

export const { setName } = schoolSlice.actions
export const { reducer: schoolReducer } = schoolSlice
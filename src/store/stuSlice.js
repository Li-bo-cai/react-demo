import { createSlice } from "@reduxjs/toolkit";

const stuSlice = createSlice({
    name: 'stu',
    initialState: {
        name: '张三',
        age: 18,
        gender: '男',
    },
    reducers: {  //指定state的各种操作，直接在对象中添加方法
        setName(state, action) {
            state.name = action.payload
        },
        setAge(state, action) {

        }
    }
})

export const { setName, setAge } = stuSlice.actions
export const { reducer: stuReducer } = stuSlice
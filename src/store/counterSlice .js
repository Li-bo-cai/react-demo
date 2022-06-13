import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../Api";

export const selectCount = (state) => state.counter.value;  //此处返回的相当于指定名称的store对象



const loadPicAPI = () => api.get('/knowledge/index')    //此处返回的是请求方法

export const incrementAsync = createAsyncThunk('incrementAsync', async (params, { dispatch }) => {
    const res = await loadPicAPI()
    // dispatch(incrementByAmount(params));
    return res
})


const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        author: '张三'
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
    // 可以额外的触发其他slice中的数据关联改变
    extraReducers: builder => {
        builder.addCase(incrementAsync.pending, (state, action) => {
            state.value = '请求中。。。'
            console.log(state, action);
        })
        builder.addCase(incrementAsync.fulfilled, (state, action) => {
            console.log(state, action);
            state.value = 1
        })
        builder.addCase(incrementAsync.rejected, (state, action) => {
            console.log(state, action);
        })
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const { reducer: counterReducer } = counterSlice;

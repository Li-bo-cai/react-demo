import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const studentApi = createApi({
    reducerPath: 'studentApi',//Api标识 不能和其他的Api或者reducer 重名
    baseQuery: fetchBaseQuery({
        baseUrl: "http://baidu.com",
    }),  //指定查询的基础信息，发送请求使用的工具
    endpoints(build) {
        return {
            getStudents: build.query({
                query() {
                    //用来指定请求的子路径
                    return 'student'
                },
                transformResponse(baseQueryRetrurnValue) {
                    //返回数据的格式
                    return baseQueryRetrurnValue
                },
                keepUnusedDataFor: 0,//是否缓存请求数据 单位秒
            }),    //查询
            // updateStudent: build.mutation()   //修改   
        }
    }
})
console.log(studentApi);

export const { useGetStudentsQuery } = studentApi

export default studentApi
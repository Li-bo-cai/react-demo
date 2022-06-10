import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setName } from '../../store/stuSlice'
import { setName as setSchoolName } from '../../store/schoolSlice'
import { useGetStudentsQuery } from '../../store/studentApi'

export default function Demo6() {

    const { data, isSuccess, isLoading } = useGetStudentsQuery(null, {
        //useQuery可以接收有个对象作为第二个参数，通过该对象可以对请求进行配置
        selectFromResult: result => {
            if (result.data) {
                result.data = result.data.filter(item => item)
            }
        }, //用来指定useQuery返回的结果
        pollingInterval: 0,  //  设置轮询的间隔，单位毫秒  如果为0则表示不轮询
        skip: false, // 是否跳过该请求   默认为false
        refetchOnMountOrArgChange: false, //设置是否每次都重新加载数据  false正常使用缓存  true 每次都重载数据  数字  数据缓存时间 （秒）
        refetchOnFocus: false,  //是否在重新获取焦点时重载数据
        refetchOnReconnect: false, //是否在重新连接后重载数据 
    })
    console.log(data, isSuccess, isLoading);

    const { student, school } = useSelector(state => state)

    const dispath = useDispatch()

    const setNameHandler = () => {
        dispath(setName('1234'))
    }

    return (
        <div>
            <div>{student.name}</div>
            <div>{school.name}</div>
            <button onClick={setNameHandler}>点击更换</button>
            <button onClick={() => { dispath(setSchoolName('光之国')) }}>点击更换学校</button>
        </div>
    )
}

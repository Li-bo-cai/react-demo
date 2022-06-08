import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setName } from '../../store/stuSlice'
import { setName as setSchoolName } from '../../store/schoolSlice'
import { useGetStudentsQuery } from '../../store/studentAp'

export default function Demo6() {

    const { data, isSuccess, isLoading } = useGetStudentsQuery()

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

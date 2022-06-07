import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setName } from '../../store'

export default function Demo6() {

    const student = useSelector(state => state.student)

    const dispath = useDispatch()

    const setNameHandler = () => {
        dispath(setName('1234'))
    }

    return (
        <div>
            <div>{student.name}</div>
            <button onClick={setNameHandler}>点击更换</button>
        </div>
    )
}

import React, { useCallback, useReducer, useState } from 'react'
import A from './A'

const countReducer = (state, action) => {
    // console.log(state, action);
    switch (action.type) {
        case 'ADD':
            return state + 1
        case 'SUB':
            return state - 1
        default:
            return state
    }
}

export default function Demo5() {
    const [count, countDispatch] = useReducer(countReducer, 1)

    const [num, setNum] = useState(1)

    const addHandler = () => {
        countDispatch({ type: 'ADD' })
    }
    const subHandler = () => {
        countDispatch({ type: 'SUB' })
    }

    const addNumHandler = useCallback(() => {
        setNum(pre => pre + num)
    }, [num])

    console.log('父组件渲染了');
    return (
        <div>
            <button onClick={subHandler}>减少</button>
            {count}
            <button onClick={addHandler}>增加</button>
            <div>
                App--{num}
                <button onClick={addNumHandler}>增加</button>
                <A onAdd={addNumHandler}></A>
            </div>
        </div>
    )
}

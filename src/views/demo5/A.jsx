import React, { useState } from 'react'
import B from './B';

function A(props) {
    const [num, setNum] = useState(1)
    // const [test, setTest] = useState(false)
    const addNumHandler = () => {
        setNum(pre => pre + 1)
    }

    const test = num % 4 === 0
    console.log("A组件渲染了");
    return (
        <div>
            A---{num}
            <button onClick={addNumHandler}>增加</button>
            <button onClick={props.onAdd}>修改App</button>
            <B test={test}></B>
        </div>
    )
}

export default React.memo(A)
import React from 'react'

function B(props) {
    console.log('B渲染了');
    return (
        <div>B
            <div>{props.test && '哈哈'}</div>
        </div>
    )
}

export default React.memo(B)
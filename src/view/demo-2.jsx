// function写法
import React from "react";
function Demo2() {
   let state={
        name : "张三",
        num : 1
    }
    setTimeout(() => {
        state.name = '李四'
    }, 1000)
    const addClick =  function(){
        console.log(1234);
    }
    return (
        <div>
            <div>{this.state.name}</div>
            <button onClick={addClick}>{this.state.num}</button>
        </div>
        
    )
}

export default Demo2
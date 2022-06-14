import React, { Component } from 'react'

import { connect } from "react-redux";
import { createIncrement, createDecrement, createIncrementIfOdd, createIncrementAsync } from '../../redux/count_action'

class ComponentUI extends Component {

    increment = () => {
        const { value } = this.selectNumber
        this.props.increment(value * 1)
    }
    decrement = () => {
        const { value } = this.selectNumber
        this.props.decrement(value * 1)
    }
    incrementIfOdd = () => {
        const { value } = this.selectNumber
        this.props.incrementIfOdd(value * 1)
    }
    incrementAsync = () => {
        const { value } = this.selectNumber
        this.props.incrementAsync(value * 1)
    }

    render() {
        return (
            <div>
                <h2>当前值为{this.props.count}</h2>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>
                <button onClick={this.incrementAsync}>异步加</button>
            </div>
        )
    }
}


export default connect(
    (state) => ({ count: state.count }),
    // mapDispatchToProps的一般写法
    // (dispatch) => ({
    //     increment: (data) => dispatch(createIncrement(data)),
    //     decrement: (data) => dispatch(createDecrement(data)),
    //     incrementIfOdd: (data) => dispatch(createIncrementIfOdd(data)),
    //     incrementAsync: (data) => dispatch(createIncrementAsync(data))
    // })
    // mapDispatchToProps的简单写法
    {
        increment: createIncrement,
        decrement: createDecrement,
        incrementIfOdd: createIncrementIfOdd,
        incrementAsync: createIncrementAsync
    }
)(ComponentUI)

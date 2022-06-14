import React, { Component } from 'react'
import { createIncrement, createDecrement, createIncrementIfOdd, createIncrementAsync } from '../../redux/count_action'
import store from '../../redux/store'
import ComponentUI from './componentUI'

export default class index extends Component {

    increment = () => {
        const { value } = this.selectNumber
        store.dispatch(createIncrement(value * 1))
    }
    decrement = () => {
        const { value } = this.selectNumber
        store.dispatch(createDecrement(value * 1))
    }
    incrementIfOdd = () => {
        const { value } = this.selectNumber
        store.dispatch(createIncrementIfOdd(value * 1))
    }
    incrementAsync = () => {
        const { value } = this.selectNumber
        store.dispatch(createIncrementAsync(value * 1))
    }
    componentDidMount() {
        store.subscribe(() => {
            this.setState({})
        })
    }
    render() {
        return (
            <div>
                <h2>当前值为{store.getState().count}</h2>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>
                <button onClick={this.incrementAsync}>异步加</button>
                <div>------------------------------------------------------------------</div>
                <ComponentUI store={store}></ComponentUI>
            </div>
        )
    }
}

import React, { Component } from 'react'
import store from '../../redux/store'

export default class index extends Component {

    increment = () => {
        const { value } = this.selectNumber
        store.dispatch({ type: 'increment', data: value * 1 })
    }
    decrement = () => {
        const { value } = this.selectNumber
        store.dispatch({ type: 'decrement', data: value * 1 })
    }
    incrementIfOdd = () => {
        const { value } = this.selectNumber
        store.dispatch({ type: 'incrementIfOdd', data: value * 1 })
    }
    incrementAsync = () => {

    }
    componentDidMount() {
        // store.subscribe(() => {
        //     this.setState({})
        // })
    }
    render() {
        return (
            <div>
                <h2>当前值为{store.getState()}</h2>
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

import React, { Component } from "react";
import PubSub from "pubsub-js";
import PropTypes from "prop-types";

class LifeCycle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 1
        }
        console.log("constructor");
    }

    static propTypes = {
        value: PropTypes.number.isRequired,
    }


    componentDidMount() {
        console.log("组件挂载完毕-----------", "componentDidMount");
    }
    componentWillUnmount() {
        console.log("组件将要卸载-----------", "componentWillUnmount");
    }
    componentDidCatch() {
        console.log("componentDidCatch", "此生命周期在后代组件抛出错误后被调用此生命周期在后代组件抛出错误后被调用");
    }
    shouldComponentUpdate() {
        console.log("shouldComponentUpdate");
        return true
    }
    getSnapshotBeforeUpdate() {
        console.log("组件更新之前-----------", "getSnapshotBeforeUpdate", "在最近一次渲染输出（提交到 DOM 节点）之前调用");
        return 20
    }
    componentDidUpdate(preProps, preState, snapshotValue) {
        console.log("componentDidUpdate", preProps, preState, snapshotValue);
    }
    Btnadd = () => {
        let num = this.state.value
        num += 1;
        this.setState({ value: num })
        PubSub.publish('changePbusub', { data: '我是pubsub发出来的消息' })
    }
    render() {
        console.log("render");
        return (
            <div>
                <button onClick={this.Btnadd}>{this.state.value}</button>
                <div>{this.props.value}</div>
                <div>组件生命周期</div>
            </div>
        )
    }
}

export default LifeCycle


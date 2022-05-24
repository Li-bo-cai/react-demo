import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class Pubsubdemo extends Component {
    state = {
        title: '我是本地消息'
    }
    componentDidMount() {
        PubSub.subscribe('changePbusub', (_, data) => {
            this.setState({ title: data.data })
            console.log(data);
        })
    }
    render() {
        return (
            <div>{this.state.title}</div>
        )
    }
}

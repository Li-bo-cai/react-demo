import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class Pubsubdemo extends Component {
    state = {
        title: '我是本地消息'
    }
    componentDidMount() {
        this.token = PubSub.subscribe('changePbusub', (_, data) => {
            this.setState({ title: data.data })
            console.log(data);
        })
    }
    componentWillUnmount() {
        PubSub.unsubscribe(this.token)
    }
    render() {
        return (
            <div>{this.state.title}</div>
        )
    }
}

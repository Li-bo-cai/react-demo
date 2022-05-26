import React, { Component } from 'react'

export default class router1 extends Component {
    componentDidMount() {
        console.log(this.props);
    }
    render() {
        return (
            <div>我是router1</div>
        )
    }
}

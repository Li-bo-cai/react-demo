import React, { Component } from 'react'

export const widthNavigation = (Child) => {
    return (props) => <Child {...props}></Child>
}

export default class Access extends Component {
    render() {
        return (
            <div>Access</div>
        )
    }
}

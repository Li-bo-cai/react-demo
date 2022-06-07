import React, { Component } from "react";
import ReactDOM from 'react-dom';

class PortalsDemo extends Component {
    constructor(props) {
        super(props)
        this.container = document.createElement("div");
    }
    componentDidMount() {
        console.log("我渲染了");
        document.body.appendChild(this.container)
    }
    componentWillUnmount() {
        console.log("卸载前");
        document.body.removeChild(this.container)
    }
    render() {
        return ReactDOM.createPortal(
            <div className="model">
                <span className="close" onClick={this.props.onClose}>
                    &times;1324
                </span>
                <div className="content">
                    {this.props.children}
                </div>
            </div>, this.container)
    }
}

export default PortalsDemo

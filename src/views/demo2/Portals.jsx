import React, { Component } from "react";
import ReactDOM from 'react-dom/client';

let container = document.createElement("div");
document.body.appendChild(container)
class Portals extends Component {
    constructor(props) {
        super(props)
        this.container = container
    }
    componentDidMount() {
        console.log("我渲染了");
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

export default Portals

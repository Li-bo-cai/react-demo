import React, { Component } from "react";
class ErrorBoundary extends Component {
    state = { hasError: false }
    componentDidCatch(error, info) {
        this.setState({ hasError: true })
        console.log(error, info);
    }
    render() {
        console.log(this.props);
        if (this.state.hasError) {
            return <h1>Oops，something went worng</h1>
        }
        return (
            <div>
                <div>{this.props.children}</div>
                <div><h1>1234</h1></div>
            </div>

        )
    }
}

export default ErrorBoundary
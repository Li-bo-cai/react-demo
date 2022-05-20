import React, { Component } from "react";
import ErrorBoundary from './ErrorBoundary'
import Prortals from './Portals'
class Demo2 extends Component {
    state = {
        user: { name: 'react' },
        showModal: true
    }
    onClick = () => {
        this.setState({ user: null })
    }
    closeModel = () => {
        this.setState({ showModal: false })
    }
    render() {
        return (
            <div>
                <span>----------------------ErrorBoundary-----------------------------</span>
                <ErrorBoundary>
                    <Profile user={this.state.user}></Profile>
                    <button onClick={this.onClick}>更新</button>
                </ErrorBoundary>
                <span>----------------------Prortals-----------------------------</span>
                {/* <div>
                    <h2>Dashboard</h2>
                    {this.state.showModal && (
                        <Prortals onClose={this.closeModel}>Modal Dialog</Prortals>
                    )}
                </div> */}
            </div>
        )
    }
}

const Profile = ({ user }) => <div>name:{user.name}</div>

export default Demo2

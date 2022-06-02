import React, { Component } from "react";
import ErrorBoundary from './ErrorBoundary'
import Prortals from './Portals'
import LifeCycle from './life-cycle'
import Pubsubdemo from "./Pubsubdemo";
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
                <div>----------------------ErrorBoundary-----------------------------</div>
                <ErrorBoundary>
                    <Profile user={this.state.user}></Profile>
                    <button onClick={this.onClick}>更新</button>
                </ErrorBoundary>
                <div>----------------------Prortals-----------------------------</div>
                <div>
                    <h2>Dashboard</h2>
                    {this.state.showModal && (
                        <Prortals onClose={this.closeModel}>Modal Dialog</Prortals>
                    )}
                </div>
                <div>----------------------LifeCycle------------------------------------</div>
                <LifeCycle value={2}></LifeCycle>
                <div>-----------------------Pubsubdemo------------------------------</div>
                <Pubsubdemo></Pubsubdemo>
            </div>
        )
    }
}

const Profile = ({ user }) => <div>name:{user.name}</div>

export default Demo2

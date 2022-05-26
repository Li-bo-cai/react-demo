import React, { Component } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import Router2 from './router2'

export const widthNavigation = (Child) => {
    return (props) => <Child {...props} navigate={useNavigate()}></Child>
}


class index extends Component {

    goPush = () => {
        this.props.navigate('/router1')
    }
    render() {
        return (
            <div className='header'>
                <div className='contanner' style={{ display: "flex" }}>
                    <div className='route-item' style={{ display: "flex", flexDirection: "column" }} >
                        <Link className='route-item-list' to="/router3">当前路由下的router1</Link>
                        <Link className='route-item-list' to="/router3/router2" >当前路由下的router2</Link>
                    </div>
                    <div className='router-view' style={{ margin: "0 20px" }}>
                        <Outlet></Outlet>
                        {/* <Routes>
                            <Route exact path="/router3/router1" element={<Router1 />} />
                            <Route path="/router3/router2" element={<Router2 />} />
                        </Routes> */}
                    </div>
                    <button onClick={this.goPush}>跳转到Router1</button>
                </div>
            </div >
        )
    }
}

export default widthNavigation(index)

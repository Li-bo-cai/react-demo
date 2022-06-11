import React, { Component } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

class index extends Component {
    goPush = () => {
        this.props.navigate('/router1')
    }
    goPushLogin = () => {
        this.props.navigate('/login', { state: { name: '张三', age: 18 } })
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
                    <button onClick={this.goPushLogin}>跳转到Login</button>
                </div>
            </div >
        )
    }
}

export const widthNavigation = (Child) => {
    return (props) => <Child {...props} navigate={useNavigate()}></Child>
}
export default widthNavigation(index)

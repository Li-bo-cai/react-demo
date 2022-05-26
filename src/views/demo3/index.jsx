import React, { Component } from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'

import Home from './home'
import Router1 from './router1'
import Router2 from './router2'

export default class index extends Component {


    goPush = () => {
        let navigate = useNavigate()
        navigate('/router1')
    }
    render() {
        return (
            <div className='header'>
                <div className='contanner' style={{ display: "flex" }}>
                    <div className='route-item' style={{ display: "flex", flexDirection: "column" }} >
                        <Link className='route-item-list' to="/router1">router1</Link>
                        <Link className='route-item-list' to="/router2" >router2</Link>
                    </div>
                    <div className='router-view' style={{ margin: "0 20px" }}>
                        <Routes>
                            <Route exact path="/router1" element={<Router1 />} />
                            <Route path="/router2" element={<Router2 />} />
                            <Route path="*" element={<Home />} />
                        </Routes>
                    </div>
                    <button onClick={this.goPush}>跳转到Router1</button>
                    <button>跳转到Router2</button>
                </div>
            </div >
        )
    }
}

import React, { Component } from 'react'
import { Link, Outlet } from 'react-router-dom'


export default class index extends Component {
  render() {
    return (
      <div>
        <Link to="/router1">demo1</Link>
        <Link to="/router2">demo2</Link>
        <Link to="/router3">demo3</Link>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../Layout'


export default class index extends Component {
  render() {
    return (
      <div>
        <Link to="/router1">demo1</Link>
        <Link to="/router2">demo2</Link>
        <Link to="/router3">demo3</Link>
        <Link to="/router4">demo4</Link>
        <Link to="/router5">demo5</Link>
        <Link to="/router6">demo6</Link>
        <Link to="/router7">demo7</Link>
        <div>
          <Layout />
        </div>
      </div>
    )
  }
}

import React from 'react'
import { hot } from 'react-hot-loader'// eslint-disable-line

import { Link } from 'react-router-dom'
// dfdfdfdfdfdfd
import Routes from '../config/router.jsx' //eslint-disable-line
const App = () => (
  <div>
    <div>zhangximufeng react app / server app hello</div>
    <Link to="/">首页</Link>
    <br />
    <Link to="/detail">详情</Link>
    <br />
    <Link to="/test">api 测试</Link>

    <Routes />
  </div>
)

export default hot(module)(App)

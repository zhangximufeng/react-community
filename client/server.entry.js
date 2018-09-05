import React from 'react'
import App from './views/App.jsx' //eslint-disable-line
import { StaticRouter } from 'react-router-dom'
import { Provider, useStaticRendering } from 'mobx-react'
import { createStoreMap } from './store/stroe'

// 让 mob x在服务端渲染的时候不会重复数据交换
useStaticRendering(true)

export default (stores, routerContext, url) => (
  <Provider {...stores}>
    <StaticRouter context={routerContext} location={url}>
      <App />
    </StaticRouter>
  </Provider>
)

export { createStoreMap }

import React, { Component } from 'react'
import {
  observer,
  inject,
} from 'mobx-react'
import PropTypes from 'prop-types'

import Helmet from 'react-helmet' //eslint-disable-line
import { AppState } from '../../store/app-state' //eslint-disable-line


@inject('appState') @observer

export default class TopicList extends Component {
  constructor() {
    super()
    this.changeName = this.changeName.bind(this)
  }

  bootstrap() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const { appState } = this.props
        appState.count = 3
        resolve(true)
      })
    })
  }

  changeName(event) {
    const { appState } = this.props
    appState.changeName(event.target.value)
  }

  render() {
    const { appState } = this.props
    return (
      <div>
        <Helmet>
          <title>This is topic list</title>
          <meta name="description" content="This is description" />
        </Helmet>
        This is TopicList page.
        <p>{appState.msg}</p>
        <p>
          <input type="text" onChange={this.changeName} />
        </p>
      </div>
    )
  }
}

TopicList.propTypes = {
  appState: PropTypes.instanceOf(AppState),
}

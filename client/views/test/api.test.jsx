import React, { Component } from 'react'

import axios from 'axios'
/* eslint-disable */
export default class TestApi extends Component {

  getTopics() {
    axios.get('/api/topics')
      .then((resp) => {
        console.log(resp)
      }).catch(err => console.err(err))
  }

  login() {
    axios.post('/api/user/login', {
      accessToken: '341df09d-c365-4e21-875b-4c5105f24f84'
    }).then((resp) => {
      console.log(resp)
    }).catch(err => console.err(err))
  }

  markAll() {
    axios.post('/api/message/mark_all?needAccessToken=true')
      .then(resp => console.log(resp))
      .catch(err => console.err(err))
  }

  render() {
    return (
      <div>
        <button onClick={this.getTopics}>topics</button>
        <button onClick={this.login}>login</button>
        <button onClick={this.markAll}>markAll</button>
      </div>
    )
  }
}


/* eslint-enable */

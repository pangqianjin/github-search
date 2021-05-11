import './App.css';

import React, { Component } from 'react'
import Search from './Components/Search'
import List from './Components/List'

export default class App extends Component {
  state = {
    users: [],
    isFirst: true,
    isLoading: false,
    err: ''
  }
  
  updateAppStates = (stateObj)=>{
    this.setState(stateObj)
  }

  render() {
    return (
      <div className='App'>
        <Search updateAppStates={this.updateAppStates} />
        <List {...this.state} />
      </div>
    )
  }
}


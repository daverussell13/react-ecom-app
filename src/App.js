import React from 'react'
import { Route } from 'react-router-dom'

import './App.css'
import HomePage from './pages/homepage/homepage.component.jsx'

const HatsPage = () => {
  return (
    <div className="hats">
      <h1>This is hats page</h1>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={HomePage} />
      <Route path='/hats' component={HatsPage} />
    </div>
  )
}

export default App

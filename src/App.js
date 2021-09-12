import React from 'react'
import { Route } from 'react-router-dom'

// css
import './App.css'

// pages
import HomePage from './pages/homepage/homepage.component.jsx'
import ShopPage from './pages/shop/shop.component'

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
    </div>
  )
}

export default App

import React from 'react'
import GlobalStyle from './globalStyles'
import './App.css'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ProductsList } from './pages/ProductsList'
import { Checkout } from './pages/Checkout'
import { NavBar } from './components/NavBar'

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar></NavBar>
      <BrowserRouter>
        <Switch>
          <Route exact path="/products" component={ProductsList}/>
          <Route exact path="/checkout" component={ Checkout } />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App

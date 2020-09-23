import React from 'react'
import GlobalStyle from './globalStyles'
import './App.css'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ProductsList } from './pages/ProductsList'

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ProductsList}/>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App

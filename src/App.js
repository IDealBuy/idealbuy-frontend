import React from "react";
import GlobalStyle from "./globalStyles";

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Checkout } from './pages/Checkout'
import { NavBar } from './components/NavBar'
import { ProductsPage } from "./pages/ProductsPage";
import { StateProvider } from "./Context";
import { AccessPage } from "./pages/AccessPage";
import { HomePage } from "./pages/HomePage";

function App() {
  const initialState = {
    isAuth: localStorage.getItem("isAuth") == null ? false : true,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "changeIsAuth":
        return {
          ...state,
          isAuth: action.isAuth,
        };
      default:
        return state;
    }
  };
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <GlobalStyle />
      <NavBar></NavBar>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/products" component={ProductsPage} />
          <Route exact path="/login" component={AccessPage} />
          <Route exact path="/checkout" component={ Checkout } />
        </Switch>
      </BrowserRouter>
    </StateProvider>
  );
}

export default App;

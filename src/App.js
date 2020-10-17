import React from "react";
import GlobalStyle from "./globalStyles";
import firebase from "firebase/app";
import "firebase/auth";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Checkout } from "./pages/Checkout";
// import { NavBar } from "./components/NavBar";
import { ProductsPage } from "./pages/ProductsPage";
import { StateProvider } from "./Context";
import { CartProvider } from "./contexts/CartContext";
import { AccessPage } from "./pages/AccessPage";
import { HomePage } from "./pages/HomePage";
import { Sidebar } from "./components/Sidebar";
import { RenderPDF } from './pages/OrderPrintPdf'
import { PurchaseOptions } from "./pages/PurchaseOptions";
import { AdminPage } from "./pages/AdminPage";
import { SupermarketPage } from "./pages/SupermarketPage";
import { Test } from "./pages/Test";
import { CartPage } from "./pages/CartPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import { Sidebar } from "./components/Sidebar";

function App() {
  var firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREAPIKEY,
    authDomain: process.env.REACT_APP_FIREAUTHDOMAIN,
    databaseURL: process.env.REACT_APP_FIREDATABASEURL,
    projectId: process.env.REACT_APP_FIREPROJECTID,
    storageBucket: process.env.REACT_APP_FIRESTORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FIREMESSAGINGSENDERID,
    appId: process.env.REACT_APP_FIREAPPID,
    measurementId: process.env.REACT_APP_FIREMEASUREMENTID,
  };

  firebase.initializeApp(firebaseConfig);
  const initialState = {
    user: localStorage.getItem("userData"),
    cart: JSON.parse(localStorage.getItem("cart"))
      ? JSON.parse(localStorage.getItem("cart"))
      : [],
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "changeCurrentUser":
        return {
          ...state,
          user: action.user,
        };
      case "addProductCart":
        return {
          ...state,
          cart: action.cart,
        };
      default:
        return state;
    }
  };
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <ToastContainer />
      <CartProvider>
        <GlobalStyle />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/products" component={ProductsPage} />
            <Route exact path="/login" component={AccessPage} />
            <Route
              exact
              path="/register"
              render={(props) => <AccessPage {...props} loginPage={false} />}
            />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/PurchaseOptions" component={PurchaseOptions} />
            <Route exact path="/admin" component={AdminPage} />
            <Route exact path="/supermarket" component={SupermarketPage} />
            <Route exact path="/test" component={Test} />
			      <Route exact path="/cart" component={CartPage} />
            <Route exact path="/pdf" component={RenderPDF} />
          </Switch>
        </BrowserRouter>
      </CartProvider>
    </StateProvider>
  );
}

export default App;

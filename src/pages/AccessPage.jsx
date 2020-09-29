import React, { useState } from "react";
import { Input } from "../styles/components/Forms";
import {
  Dialog,
  Img,
  LoginContainer,
  Section,
  ShoppingCart,
} from "../styles/pages/login";
import logo from "../assets/logotipo.png";
import shoppingCart from "../assets/shoppingCart.svg";
//import { useStateValue } from "../Context";

export const AccessPage = () => {
  const [login, setLogin] = useState(true);
  //const [{ isAuth }, dispatch] = useStateValue();

  const changeType = () => {
    setLogin(!login);
  };

  const Login = () => {
    return (
      <LoginContainer>
        <h3>Login</h3>
        <label htmlFor="">Email</label>
        <Input id="email" type="text" />
        <br />
        <label htmlFor="">Password</label>
        <Input id="password" type="password" />
        <p onClick={changeType}>New User? Create an account </p>
        <div style={{ height: "50px" }}></div>
      </LoginContainer>
    );
  };

  const Register = () => {
    return (
      <LoginContainer>
        <h3>Create account</h3>
        <label htmlFor="">Email</label>
        <Input id="email" type="text" />
        <br />
        <label htmlFor="">Password</label>
        <Input id="password" type="password" />
        <p onClick={changeType}>Already an account? Sign In </p>
        <div style={{ height: "50px" }}></div>
      </LoginContainer>
    );
  };

  return (
    <Section>
      <Dialog>
        <div>
          <Img src={logo} alt="" />
        </div>
        {login ? <Login /> : <Register />}
      </Dialog>
      <ShoppingCart src={shoppingCart} alt="" />
    </Section>
  );
};

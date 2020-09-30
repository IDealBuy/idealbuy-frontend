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
import { Button } from "../components/Buttons";
import { handleSignUp, handleSignIn } from "../utils/auth";
//import { useStateValue } from "../Context";

export const AccessPage = () => {
  const [login, setLogin] = useState(true);
  //const [{ isAuth }, dispatch] = useStateValue();

  const changeType = () => {
    setLogin(!login);
  };

  const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleInput = (e) => {
      if (e.target.id === "email") {
        setEmail(e.target.value);
      } else if (e.target.id === "password") setPassword(e.target.value);
    };

    return (
      <LoginContainer>
        <h3>Log In</h3>
        <label htmlFor="">Email</label>
        <Input
          key="email"
          id="email"
          value={email}
          onChange={handleInput}
          type="text"
        />
        <br />
        <label htmlFor="">Password</label>
        <Input
          id="password"
          onChange={handleInput}
          value={password}
          type="password"
        />
        <p onClick={changeType}>New User? Create an account </p>
        <Button onClick={()=> handleSignIn(email,password)}>Log In</Button>

        <div style={{ height: "50px" }}></div>
      </LoginContainer>
    );
  };

  const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleInput = (e) => {
      if (e.target.id === "email") {
        setEmail(e.target.value);
      } else if (e.target.id === "password") setPassword(e.target.value);
    };

    return (
      <LoginContainer>
        <h3>Create account</h3>
        <label htmlFor="">Email</label>
        <Input id="email" onChange={handleInput} value={email} type="text" />
        <br />
        <label htmlFor="">Password</label>
        <Input
          id="password"
          onChange={handleInput}
          value={password}
          type="password"
        />
        <p onClick={changeType}>Already an account? Sign In </p>
        <Button onClick={()=> handleSignUp(email,password)}>Sign Up</Button>
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

import React, { useState } from "react";
import { useHistory } from "react-router-dom";

//import { ToastContainer, toast } from "react-toastify";
//import "react-toastify/dist/ReactToastify.css";

import { Input } from "../styles/components/Forms";
import {
  Dialog,
  Img,
  LoginContainer,
  Section,
  ShoppingCart,
  Separator,
} from "../styles/pages/login";
import logo from "../assets/logotipo.png";
import shoppingCart from "../assets/shoppingCart.svg";
import { Button } from "../components/Buttons";
import { handleSignUp, handleSignIn } from "../utils/auth";
import { useStateValue } from "../Context";

export const AccessPage = () => {
  const [login, setLogin] = useState(true);
  const [{ user }, dispatch] = useStateValue();
  const history = useHistory();

  const changeType = () => {
    console.log(user);
    setLogin(!login);
  };

  const handleLocalStorage = (user) => {
    console.log(user)
    let userData = {
      email: user.email,
      uid: user.uid,
    };
    localStorage.setItem("userData", JSON.stringify(userData));
    dispatch({
      type: "changeCurrentUser",
      user: userData,
    });
    console.log(user.uid);
  };

  const submit = (option, email, password) => {
    if (option === "login") {
      handleSignIn(email, password).then((resp) => {
        if (resp !== undefined) {
          handleLocalStorage(resp.user);
          history.push("/");
        }
      });
    } else {
      handleSignUp(email, password).then((resp) => {
        if (resp !== undefined) {
          handleLocalStorage(resp);
          history.push("/");
        }
      });
    }
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
        <div style={{ height: "1.5em" }}></div>

        <Button
          onClick={() => {
            submit("login", email, password);
          }}
        >
          Log In
        </Button>
        <OrSeparator />
        <Button secondary={true} onClick={() => changeType(email, password)}>
          Sign Up
        </Button>

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
        <div style={{ height: "1.5em" }}></div>

        <Button onClick={() => submit("signup", email, password)}>
          Sign Up
        </Button>
        <OrSeparator />
        <Button secondary={true} onClick={() => changeType(email, password)}>
          Log In
        </Button>
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

const OrSeparator = () => (
  <Separator>
    <hr />
    or
    <hr />
  </Separator>
);
